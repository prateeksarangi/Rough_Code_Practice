#include<iostream>
#define MAX 100000
using namespace std;


int main(int argc, char const *argv[])
{
	int n;
	cin>>n;

	int A[n], i, j, x, y, a, b;

	for(i=0; i<n; i++)
		cin>>A[i];

	int s[n] = { 0 };
	int flagx = 0, flagy = 0;

	s[0] = 0;
	for(i=1; i<n; i++){
		s[i] = A[i] - A[i-1];
	}

	for(i=0; i<n; i++){
		if(s[i] < 0){
			x = s[i];
			a = i;
			flagx = 1;
			break;
		}
		
	}
	for(j=n-1; j>-1; j--){
		if(s[j] < 0){
			y = s[j];
			b = j;
			flagy = 1;
			break;
		}
	}
	if(flagx == 0 && flagy == 0)
		cout<<"The array is already sorted";

	else{
		int flag1=0, flag2=0;
		int ans1, ans2;

		for(i=a-1; i>-1; i--){
			x += s[i];
			if(x >= 0){
				ans1 = i;
				flag1 = 1;
				break;
			}
		}

		for(j=b+1; j<n; j++){
			y += s[j];
			if(y >= 0){
				ans2 = j;
				flag2 = 1;
				break;
			}
		}

		if(flag1 != 0 && flag2 != 0)
			cout<<ans1<<", "<<ans2<<"#1";

		else if(flag1 == 0 && flag2 != 0)
			cout<<"0, "<<ans2<<"#2";

		else if(flag1 != 0 && flag2 == 0)
			cout<<ans1<<", "<<n - 1<<"#3";

		else
			cout<<"0, "<<n - 1<<"#4";
	}
		cout<<endl;
	return 0;
}