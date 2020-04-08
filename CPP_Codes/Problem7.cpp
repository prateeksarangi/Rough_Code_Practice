#include<iostream>
using namespace std;

int main(int argc, char const *argv[])
{
	int t, n, i;
	cin>>t;


	while(t--){
		int a = 1, b = 1, c;
		cin>>n;
		cout<<a<<" "<<b<<" ";
		for(i = 0; i<n-2; i++){
			c = a+b;
			cout<<c<<" ";
			a = b;
			b = c;
		}
	}

	cout<<endl;
	return 0;
}
