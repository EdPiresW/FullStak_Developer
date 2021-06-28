//  The MyMethod
using System;

namespace MyApplication
{
	class Car
	{	
        public string model;
        public int year;
        public Car()
        {
            model = "Mustang";
            year = 1960; 

        }
	  	static void MyMethod()
	   	{
	    	Console.WriteLine("I just got executed!");
        	Console.WriteLine("This is a msg!");

		}
	  	static void Main(string[] args)
		{
	    	MyMethod();
            Car Ford = new Car();
            Console.WriteLine(Ford.model);
            Console.WriteLine(Ford.year);
	  	}
	}	  
}
