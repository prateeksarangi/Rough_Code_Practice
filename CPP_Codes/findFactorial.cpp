#include<iostream>
using namespace std;

int main(int argc, char const *argv[]) {
  long double f = 1;
  int n, i;
  cin>>n;
  for(i=1; i<=n; i++) {
    f *= i;
  }
  cout<<f;
  return 0;
}
