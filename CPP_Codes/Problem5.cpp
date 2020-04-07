#include<iostream>
using namespace std;

int main(int argc, char const *argv[])
{
	int n;
	cin>>n;

	int i, A[n];

	for(i=0; i<n; i++)
		cin>>A[i];

	int flag = 0;
	for(i=0; i<n; i++){
		if(A[i] > A[i+1]){
			ans = A[i];
			flag = 1;
			break;
		}
	}

	if(flag != 0)
		cout<<ans<<endl;
	else
		cout<<A[n-1];
	return 0;
}