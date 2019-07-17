#include<iostream>
using namespace std;

main(){
    int n;
    cout<<"Enter the number of elements in the array:- ";
    cin>>n;
    
    int a[n];
    cout<<"Enter the elements of the array:- ";
    for(int i=0; i<n; i++){
        cin>>a[i];
    }

    int t=a[0];
    for(int i=0; i<n; i++){
        if(t<a[i])
            t=a[i];
    }

    cout<<"The largest number is:- "<<t;
}