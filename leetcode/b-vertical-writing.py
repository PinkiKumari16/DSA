arr=[]
max_len=0
for i in range(int(input())):
  s=input()
  max_len=max(max_len, len(s))
  
  arr.append(list(s))

for ind in range(len(arr)):
  if(len(arr[ind])<max_len):
    arr[ind]+=[0]*(max_len-len(arr[ind]))
i=0
while(i<max_len):
  j=0
  t=''
  while(j<len(arr)):
    if(arr[j][i]==0):
      if(i!=(max_len-1) or j==0):
        t='*'+t
      else:
        pass
    else:
      t=arr[j][i]+t
    j+=1
  print(t)
  i+=1