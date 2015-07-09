#include <stdio.h>
int main(){
	int i =0 ;
	char str[1000];
	while(gets(str)!=NULL){
		i++;
		printf("(%d,'%s'),\n",i,str);
	}

	return 0;
}