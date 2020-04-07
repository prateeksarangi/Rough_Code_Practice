#include<iostream>
using namespace std;

int main(int argc, char const *argv[])
{
	int n;
	cin>>n;

	int A[n], i, j, a, b, x, y;
	int flag1 = 0, flag2 = 0;

	for(i=0; i<n; i++)
		cin>>A[i];

	for(i=0; i<n; i++){
		if(A[i] > A[i+1]){
			x = A[i];
			a = i;
			flag1++;
			break;
		}
	}
	for(j=n-1; j>-1; j--){
		if(A[j] < A[j-1]){
			y = A[j];
			b = j;
			flag2++;
		}
	}

	if(flag1 == 0 && flag2 == 0)
		cout<<"Array already sorted";
	else{
		cout<<a<<", "<<b;
	}
	return 0;
}