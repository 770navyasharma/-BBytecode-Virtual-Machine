#include "interpreter.h"

void Interpreter::interpret(const std::vector<std::unique_ptr<Statement>>& statements) {
    for (const auto& stmt : statements) {
        if (auto disp = dynamic_cast<DisplayStatement*>(stmt.get())) {
            execute(*disp);
        } else if (auto decl = dynamic_cast<VarDeclaration*>(stmt.get())) {
            execute(*decl);
        } else {
            std::cerr << "Unknown statement type encountered.\n";
        }
    }
}

void Interpreter::execute(const DisplayStatement& stmt) {
    for (const auto& expr : stmt.expressions) {
        Value value = evaluate(expr.get());
        printValue(value);
        std::cout << std::endl;
    }
}

void Interpreter::execute(const VarDeclaration& stmt) {
    Value value = evaluate(stmt.initializer.get());
    environment[stmt.name] = value;
}

Interpreter::Value Interpreter::evaluate(const Expression* expr) {
    if (auto lit = dynamic_cast<const Literal*>(expr)) {
        switch (lit->type) {
            case Literal::Type::Integer:
                return std::stoi(lit->value);
            case Literal::Type::Float:
                return std::stod(lit->value);
            case Literal::Type::Boolean:
                return lit->value == "true";
            case Literal::Type::String:
                return lit->value;
        }
    } else if (auto var = dynamic_cast<const Variable*>(expr)) {
        auto it = environment.find(var->name);
        if (it != environment.end()) {
            return it->second;
        } else {
            std::cerr << "Undefined variable: " << var->name << "\n";
            return 0; // Default fallback
        }
    }

    std::cerr << "Unknown expression type encountered.\n";
    return 0;
}

void Interpreter::printValue(const Value& value) {
    std::visit([](auto&& val) {
        std::cout << val;
    }, value);
}