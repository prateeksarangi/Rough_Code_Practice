#include<iostream>
#include <iomanip>
#include<boost/multiprecision/cpp_int.hpp>
using namespace std;

int main(int argc, char const *argv[]) {
  cpp_int f = 1;
  int n, i;
  cin>>n;
  for(i=1; i<=n; i++) {
    f *= i;
  }
  cout<<f;
  return 0;
}
