#include <stdio.h>
#include <stdlib.h>

typedef union {
        int int_type;
        char* char_type;
        //and so on
    } dynamic;
    
void test_function(dynamic *data)
{
    char* command;
    int comsize = 100, ERR;

    printf(" Enter data : ");

    command = (char *) malloc (comsize + 1);
    gets(command);
    ERR = sscanf(command, "%[a-z-A-Z-0-9-_-.] ", &(*data));

//  return data;
}

int main()
{
    dynamic test;
//    dynamic accept = (dynamic) test_function(test);
    void (*accept2)(dynamic *);
    accept2 = &test_function;
    accept2(&test);

//    test_function(&test);

    printf("\n Entered : %s", &test);

    return 0;
}