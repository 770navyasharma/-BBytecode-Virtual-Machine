// src/token.h
#pragma once

#include <string>

enum TokenType {
    TOK_DISPLAY, TOK_MANLO, TOK_AGAR, TOK_WARNA, TOK_WARNA_AGAR, TOK_JAB_TAK,
    TOK_IDENTIFIER, TOK_NUMBER, TOK_STRING,
    TOK_ASSIGN, TOK_PLUS, TOK_LT, TOK_GT,
    TOK_COLON, TOK_LPAREN, TOK_RPAREN, TOK_LBRACE, TOK_RBRACE,
    TOK_NEWLINE, TOK_EOF
};

struct Token {
    TokenType type;
    std::string value;
    int line;

    Token(TokenType t, const std::string& val, int l) : type(t), value(val), line(l) {}
};
