//obsolete: code for testing theoretical c++ form processing

#include <iostream>
#include <string>

int main() {
    // Prompt the user to enter their name
    std::cout << "Enter your name: ";
    std::string name;
    std::getline(std::cin, name);

    // Prompt the user to enter their email
    std::cout << "Enter your email: ";
    std::string email;
    std::getline(std::cin, email);

    // Prompt the user to enter their phone number
    std::cout << "Enter your phone number: ";
    std::string phoneNumber;
    std::getline(std::cin, phoneNumber);

    // Process the form data
    std::cout << "Form submitted successfully!\n";
    std::cout << "Name: " << name << "\n";
    std::cout << "Email: " << email << "\n";
    std::cout << "Phone Number: " << phoneNumber << "\n";

    return 0;
}
