#ifndef PARSER_H
#define PARSER_H

#include "lexer.h"
#include "ast.h"
#include <vector>
#include <memory>

class Parser {
public:
    explicit Parser(const std::vector<Token>& tokens);

    // Main entry point for parsing entire source
    std::vector<std::unique_ptr<Statement>> parse();

private:
    const std::vector<Token>& tokens;
    size_t current = 0;

    // Statement parsers
    std::unique_ptr<Statement> parseStatement();
    std::unique_ptr<DisplayStatement> parseDisplay();
    std::unique_ptr<VarDeclaration> parseVarDeclaration();

    // Expression parser
    std::unique_ptr<Expression> parseExpression();

    // Utility helpers
    bool match(TokenType type);
    bool check(TokenType type) const;
    const Token& advance();
    const Token& peek() const;
    bool isAtEnd() const;
    const Token& previous() const;
    bool consume(TokenType type, const std::string& errorMessage);
};

#endif // PARSER_H