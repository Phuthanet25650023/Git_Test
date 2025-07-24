import random as rd
Value = lambda Value,Ramdom,Input : Value+Ramdom+(Input+10)
X=int(input("Enter Value:"))
print(Value(15,rd.seed(10),X))