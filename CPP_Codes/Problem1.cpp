#include<iostream>
#include<math.h> 

using namespace std;

int main(int argc, char const *argv[])
{
	int i, n;
	double s = 0;
	cin>>n;

	if (n < 0) 
        return 0; 
  
    if (n <= 1) 
        return 1;
    else{
		for(i=2; i<=n; i++){
			s += log10(i);
		}

		cout<<floor(s) + 1<<endl;
	}
	return 0;
}
