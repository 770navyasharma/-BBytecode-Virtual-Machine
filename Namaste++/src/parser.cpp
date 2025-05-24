#include "parser.h"
#include <iostream>

Parser::Parser(const std::vector<Token>& tokens) : tokens(tokens) {}

bool Parser::match(TokenType type) {
    if (!isAtEnd() && peek().type == type) {
        advance();
        return true;
    }
    return false;
}

const Token& Parser::advance() {
    if (!isAtEnd()) ++current;
    return tokens[current - 1];
}

const Token& Parser::peek() const {
    return tokens[current];
}

bool Parser::isAtEnd() const {
    return peek().type == TokenType::END_OF_FILE;
}

std::unique_ptr<Expression> Parser::parseExpression() {
    const Token& token = advance();

    switch (token.type) {
        case TokenType::NUMBER:
            return std::make_unique<Literal>(token.value, Literal::Type::Integer);

        case TokenType::FLOAT:
            return std::make_unique<Literal>(token.value, Literal::Type::Float);

        case TokenType::STRING:
            return std::make_unique<Literal>(token.value, Literal::Type::String);

        case TokenType::TRUE:
            return std::make_unique<Literal>("true", Literal::Type::Boolean);

        case TokenType::FALSE:
            return std::make_unique<Literal>("false", Literal::Type::Boolean);

        case TokenType::IDENTIFIER:
            return std::make_unique<Variable>(token.value);

        default:
            std::cerr << "Unexpected token in expression: " << token.value << "\n";
            return nullptr;
    }
}

std::unique_ptr<DisplayStatement> Parser::parseDisplay() {
    if (!match(TokenType::DISPLAY)) return nullptr;
    if (!match(TokenType::LEFT_PAREN)) return nullptr;

    std::vector<std::unique_ptr<Expression>> expressions;

    do {
        auto expr = parseExpression();
        if (!expr) return nullptr;
        expressions.push_back(std::move(expr));
    } while (match(TokenType::COMMA));

    if (!match(TokenType::RIGHT_PAREN)) return nullptr;

    return std::make_unique<DisplayStatement>(std::move(expressions));
}

std::unique_ptr<VarDeclaration> Parser::parseVarDeclaration() {
    if (!match(TokenType::MANLO)) return nullptr;

    if (peek().type != TokenType::IDENTIFIER) {
        std::cerr << "Expected variable name after 'manlo'.\n";
        return nullptr;
    }

    std::string name = advance().value;

    if (!match(TokenType::EQUAL)) {
        std::cerr << "Expected '=' after variable name.\n";
        return nullptr;
    }

    auto initializer = parseExpression();
    if (!initializer) return nullptr;

    return std::make_unique<VarDeclaration>(std::move(name), std::move(initializer));
}

std::vector<std::unique_ptr<Statement>> Parser::parse() {
    std::vector<std::unique_ptr<Statement>> statements;

    while (!isAtEnd()) {
        if (peek().type == TokenType::DISPLAY) {
            auto stmt = parseDisplay();
            if (stmt) {
                statements.push_back(std::move(stmt));
            } else {
                std::cerr << "Error parsing display statement at line: " << peek().line << "\n";
                break;
            }
        } else if (peek().type == TokenType::MANLO) {
            auto varDecl = parseVarDeclaration();
            if (varDecl) {
                statements.push_back(std::move(varDecl));
            } else {
                std::cerr << "Error parsing variable declaration at line: " << peek().line << "\n";
                break;
            }
        } else {
            std::cerr << "Unexpected token at line " << peek().line << ": " << peek().value << "\n";
            advance(); // skip unexpected token
        }
    }

    return statements;
}