#ifndef LEXER_H
#define LEXER_H

#include <string>
#include <vector>

enum class TokenType {
    // Keywords
    DISPLAY,
    MANLO,
    TRUE,
    FALSE,

    // Operators and Symbols
    EQUAL,
    LEFT_PAREN,
    RIGHT_PAREN,
    COMMA,
    COLON,

    // Literals and Identifiers
    IDENTIFIER,
    NUMBER,
    FLOAT,
    STRING,
    BOOLEAN,

    // Structural Tokens
    NEWLINE,
    INDENT,
    DEDENT,
    END_OF_FILE,

    // Misc
    UNKNOWN
};

struct Token {
    TokenType type;
    std::string value;
    int line;

    Token(TokenType t, std::string v, int l)
        : type(t), value(std::move(v)), line(l) {}
};

std::vector<Token> tokenize(const std::string& source);

#endif // LEXER_H