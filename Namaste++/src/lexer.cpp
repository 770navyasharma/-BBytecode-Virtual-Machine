#include "lexer.h"
#include <cctype>

static bool isAlpha(char c) {
    return std::isalpha(static_cast<unsigned char>(c)) || c == '_';
}

static bool isDigit(char c) {
    return std::isdigit(static_cast<unsigned char>(c));
}

static bool isAlphaNumeric(char c) {
    return isAlpha(c) || isDigit(c);
}

static TokenType checkKeyword(const std::string& word) {
    if (word == "display") return TokenType::DISPLAY;
    if (word == "manlo") return TokenType::MANLO;
    if (word == "true" || word == "false") return TokenType::BOOLEAN;
    return TokenType::IDENTIFIER;
}

std::vector<Token> tokenize(const std::string& source) {
    std::vector<Token> tokens;
    size_t i = 0;
    int line = 1;

    while (i < source.length()) {
        char c = source[i];

        // Handle whitespace
        if (std::isspace(c)) {
            if (c == '\n') {
                tokens.emplace_back(TokenType::NEWLINE, "\\n", line);
                ++line;
            }
            ++i;
            continue;
        }

        // Handle identifiers and keywords
        if (isAlpha(c)) {
            size_t start = i;
            while (i < source.length() && isAlphaNumeric(source[i])) ++i;
            std::string word = source.substr(start, i - start);

            TokenType type = checkKeyword(word);
            tokens.emplace_back(type, word, line);
            continue;
        }

        // Handle numbers (int and float)
        if (isDigit(c)) {
            size_t start = i;
            bool isFloat = false;

            while (i < source.length() && isDigit(source[i])) ++i;

            if (i < source.length() && source[i] == '.') {
                isFloat = true;
                ++i;
                while (i < source.length() && isDigit(source[i])) ++i;
            }

            std::string number = source.substr(start, i - start);
            tokens.emplace_back(isFloat ? TokenType::FLOAT : TokenType::NUMBER, number, line);
            continue;
        }

        // Handle strings
        if (c == '"') {
            ++i; // skip opening quote
            size_t start = i;

            while (i < source.length() && source[i] != '"') ++i;

            std::string str = source.substr(start, i - start);
            tokens.emplace_back(TokenType::STRING, str, line);

            if (i < source.length() && source[i] == '"') ++i; // skip closing quote
            continue;
        }

        // Handle symbols
        switch (c) {
            case '=':
                tokens.emplace_back(TokenType::EQUAL, "=", line);
                break;
            case '(':
                tokens.emplace_back(TokenType::LEFT_PAREN, "(", line);
                break;
            case ')':
                tokens.emplace_back(TokenType::RIGHT_PAREN, ")", line);
                break;
            case ',':
                tokens.emplace_back(TokenType::COMMA, ",", line);
                break;
            case ':':
                tokens.emplace_back(TokenType::COLON, ":", line);
                break;
            default:
                tokens.emplace_back(TokenType::UNKNOWN, std::string(1, c), line);
                break;
        }

        ++i;
    }

    tokens.emplace_back(TokenType::END_OF_FILE, "", line);
    return tokens;
}