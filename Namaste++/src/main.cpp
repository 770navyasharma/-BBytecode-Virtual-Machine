#include <iostream>
#include <fstream>
#include <sstream>
#include "lexer.h"
#include "parser.h"
#include "interpreter.h"

int main() {
    std::string filename = "examples/test.nam";
    std::ifstream file(filename);
    if (!file) {
        std::cerr << "Could not open file: " << filename << "\n";
        return 1;
    }

    std::stringstream buffer;
    buffer << file.rdbuf();
    std::string source = buffer.str();

    // Lexical Analysis
    std::vector<Token> tokens = tokenize(source);

    // Optional: Debug tokens
    /*
    for (const auto& token : tokens) {
        std::cout << "Token: " << static_cast<int>(token.type) << " - " << token.value << "\n";
    }
    */

    // Parsing
    Parser parser(tokens);
    std::vector<std::unique_ptr<Statement>> statements = parser.parse();

    // Interpretation
    Interpreter interpreter;
    interpreter.interpret(statements);

    return 0;
}