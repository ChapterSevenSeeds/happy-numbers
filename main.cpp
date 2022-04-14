#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

int main(int argc, char** argv) {
    unsigned long long num = 1;

    unsigned long long sum;
    unsigned long long numCopy;
    unsigned long long currentDigit;
    unordered_set<unsigned long long> trail;
    while (true) {
        numCopy = num;

        while (true) {
            sum = 0;
            while (numCopy > 0) {
                currentDigit = numCopy % 10;
                sum += currentDigit * currentDigit;
                numCopy /= 10;
            }

            if (sum == 1) {
                cout << num << endl;
                ++num;
                break;
            }

            if (trail.find(sum) != end(trail)) {
                ++num;
                break;
            }

            trail.insert(sum);
            numCopy = sum;
        }

        trail.clear();
    }
}