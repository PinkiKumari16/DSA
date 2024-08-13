k=3
arr=[12,-1,-7, 8, -15, 30,16,28]
res=[]
for i in range(len(arr)-k+1):
    flag=False
    for j in range(i,k+i):
        if(arr[j]<0):
            flag=True
            res.append(arr[j])
            break
    if (flag==False):
        res.append(0)
print(res)
    