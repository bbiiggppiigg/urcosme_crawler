#include <stdio.h>
int main(){
	char str[1000];
	char sql[100000];
	sql[0] ='\0';
	//sprintf(sql,"creat table features(");
	while(gets(str)!=NULL){
		sprintf (sql,"%s,\n`%s` int(11) NOT NULL",sql,str);
	}
	puts(sql);
	return 0;
}