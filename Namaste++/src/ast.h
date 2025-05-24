#ifndef AST_H
#define AST_H

#include <string>
#include <vector>
#include <memory>
#include <variant>

// Base class for all AST nodes
struct ASTNode {
    virtual ~ASTNode() = default;
};

// Base class for expressions
struct Expression : public ASTNode {
    virtual ~Expression() = default;
};

// Literal expression (string, number, float, bool)
struct Literal : public Expression {
    enum class Type { Integer, Float, String, Boolean };
    std::string value; // Store original string (can convert later)
    Type type;

    Literal(std::string v, Type t) : value(std::move(v)), type(t) {}
};

// Variable expression
struct Variable : public Expression {
    std::string name;

    explicit Variable(std::string n) : name(std::move(n)) {}
};

// Base class for statements
struct Statement : public ASTNode {
    virtual ~Statement() = default;
};

// display(...) call
struct DisplayStatement : public Statement {
    std::vector<std::unique_ptr<Expression>> expressions;

    explicit DisplayStatement(std::vector<std::unique_ptr<Expression>> args)
        : expressions(std::move(args)) {}
};

// Variable declaration: manlo x = 10;
struct VarDeclaration : public Statement {
    std::string name;
    std::unique_ptr<Expression> initializer;

    VarDeclaration(std::string n, std::unique_ptr<Expression> init)
        : name(std::move(n)), initializer(std::move(init)) {}
};

#endif // AST_H