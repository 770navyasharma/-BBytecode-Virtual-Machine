#ifndef INTERPRETER_H
#define INTERPRETER_H

#include "ast.h"
#include <unordered_map>
#include <string>
#include<variant>
#include <iostream>
#include <memory>

class Interpreter {
public:
    using Value = std::variant<int, double, bool, std::string>;

    void interpret(const std::vector<std::unique_ptr<Statement>>& statements);

    void execute(const DisplayStatement& stmt);
    void execute(const VarDeclaration& stmt);

    Value evaluate(const Expression* expr);
    void printValue(const Value& value);

private:
    std::unordered_map<std::string, Value> environment;
};

#endif // INTERPRETER_H