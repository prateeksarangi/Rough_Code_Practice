#include<iostream> 
#define MAX 100000 

using namespace std;

void printPairs(int arr[], int arr_size, int k) 
{ 
    int i, temp; 
    bool s[MAX] = { 0 };
  
    for (i = 0; i < arr_size; i++) { 
        temp = k + arr[i]; 
        if (s[temp] == 1) {
            cout<<"Pair with given k "<< k;
        	cout<<" is ("<<i<<" "<<s[temp]<<")\n";
        }
        s[arr[i]] = 1; 
    } 
} 
  
int main() 
{ 
    int n; 
  	cout<<"Enter the size of array:- ";
  	cin>>n;

  	int A[n], k, i;

  	cout<<"Enter the array elements:- ";
  	for(i=0; i<n; i++)
  		cin>>A[i];

  	cout<<"Enter the difference:- ";
  	cin>>k;
    
    //printPairs(A, n, k); 
    int temp, flag = 0; 
    bool s[MAX] = { 0 };
  
    for (i = 0; i < n; i++) { 
        temp = k + A[i]; 
        if (s[temp] == 1) {
            cout<<"TRUE, ";
        	cout<<"("<<i<<" "<<s[temp]<<")\n";
        	flag = 2;
        }
        s[A[i]] = 1; 
    } 

    if(flag == 0)
    	cout<<"FALSE\n";
    return 0; 
} 