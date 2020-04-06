#include<iostream> 
#include<algorithm> 
using namespace std; 
  
int main() 
{ 
	int n, temp, min = INT_MAX;
	cin>>n;
	int A[n], k, i;
	cin>>k;

	for(i=0; i<n; i++)
		cin>>A[i];

	sort(A, A+n);
	for(i=0;i<=n-k;i++){
		temp = A[i+k-1]-A[i];
		if(temp < min)
		min = temp;
	}
	cout << min << endl;
    return 0; 
}