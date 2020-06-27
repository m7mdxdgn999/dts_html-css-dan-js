# Menyusun Data
# 1.List
# Tetapkan sebuah list string ke variable fruits
fruits=["apel","pisang","jeruk"]

# Cetak element di index 0
print (fruits[0])

# Gabungkan string dan element di index 2, dan cetak hasilnya
print ("Saya suka"+fruits[2])

#2. Memperbarui dan Menambah Element-Element List
fruits = ['apel', 'pisang', 'jeruk']

# Tambahkan 'anggur' ke 'fruits'
fruits.append("anggur")

# Cetak 'fruits'
print(fruits)

# Perbarui element index 0
fruits[0]="ceri"

# Cetak element index 0
print(fruits[0])

# 3. Loop for
fruits = ['apel', 'pisang', 'jeruk']

# Dapatkan element fruits menggunakan loop for, dan cetak 'Saya suka ___'
for fruit in fruits:
    print ("Saya suka "+fruit )

# 4. Dictionary
# Tetapkan dictionary ke variable fruits
fruits={"apel":"apple", "jeruk":"orange"}

# Cetak nilai dengan kunci 'jeruk'
print (fruits["jeruk"])

# Dengan menggunakan dictionary fruits, cetak 'Bahasa Inggris apel adalah ___'
print ("Bahasa Inggris apel adalah"+fruits["apel"])

# 5. Memperbarui dan Menambah Element di Dictionary
fruits = {'apel': 1, 'pisang': 2, 'jeruk': 4}

# Perbarui nilai dengan kunci 'pisang' ke 3
fruits['pisang']=3

# Tambahkan element ke fruits dengan kunci 'anggur' dan nilai 5
fruits['anggur']=5

# Cetak fruits
print (fruits)

# 6. Loop for (2)
fruits = {'apel': 'apple', 'jeruk': 'orange', 'anggur': 'grape'}

# Dengan loop for, cetak '___ adalah ___ dalam bahasa Inggris'
for kunci_fruit in fruits :
    print (kunci_fruit+"adalah"+fruits[kunci_fruit]+"dalam bahasa Inggris")


# Bekerja dengan Loop
# 7. Loop while
x = 10

# Buat loop while yang diulang selama x lebih besar dari 0

while x>0:
    # Cetak variable x  
    print(x)
    # Kurangi 1 dari variable x 
    x-=1

# 8. Statement break
numbers = [765, 921, 777, 256]
for number in numbers:
    print(number)
    # ketika variable number adalah 777, cetak '777 di temukan, hentikan loop' dan keluar dari loop
    if number ==777:
        print("777 di temukan, hentikan loop")
        break
    
# 9. Statement continue
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for number in numbers:
    # Lewatkan loop untuk angka yang dapat di bagi 3
    if number % 3 == 0:
        continue
    
    print(number)

# Aplikasi Shopping
# 10.Menyiapkan Barang-Barang
# Buat dictionary dengan kunci dan nilai, dan tetapkan ke variable items 
items={"apel":2,"pisang":4,"jeruk":6}
# Buat loop for yang mengambil kunci dari items
for item_name in items:
    # Cetak '--------------------------------------------------'
    print("--------------------------------------------------")
    # Cetak 'Harga setiap ___ ___ dolar'
    print ("Harga setiap"+ item_name +str(items[item_name])+"dolar")

# 11.Membeli Sebuah Barang
items = {'apel': 2, 'pisang': 4, 'jeruk': 6}
for item_name in items:
    print('--------------------------------------------------')
    print('Harga setiap ' + item_name + ' ' + str(items[item_name]) + ' dolar')
    
    # Dapatkan nilai menggunakan input(), dan berikan ke variable input_count 
    input_count=input("Mau berapa"+item_name+"?: ")
    
    # Cetak 'Anda akan membeli ___ ___' menggunakan input_count dan item_name
    print ("Anda akan membeli" + input_count+""+item_name)
    
    # Ubah input_count ke integer dan berikan ke variable count 
    count=int(input_count)
    
    # Kalikan harga setiap item dan variable count, dan berikan ke variable total_price 
    total_price =count*items[item_name]
    
    # Dengan menggunakan total_price dan type conversion, cetak 'Harga total adalah ___ dolar'
    print ("Harga total adalah" +str(total_price)+" dolar")

#12. Control Flow
    # Berikan 20 ke variable money
money=20

items = {'apel': 2, 'pisang': 4, 'jeruk': 6}
for item_name in items:
    print('--------------------------------------------------')
    # Menggunakan variable money, cetak 'Anda memiliki ___ dolar di dompet Anda'
    print("Anda memiliki" +str(money)+ "dolar di dompet Anda")
    
    print('Harga setiap ' + item_name + ' ' + str(items[item_name]) + ' dolar')
    
    input_count = input('Mau berapa ' + item_name + '?:')
    print('Anda akan membeli ' + input_count + ' ' + item_name)
    
    count = int(input_count)
    total_price = items[item_name] * count
    print('Harga total adalah ' + str(total_price) + ' dolar')
    
    # Tambahkan control flow berdasarkan perbandingan dari money dan total_price
    if money>=total_price:
        print("Anda telah membeli" +input_count+" "+item_name)
        money-=total_price
        
    else:
        print('Uang Anda tidak mencukupi')
        print('Anda tidak dapat membeli ' + item_name + ' sebanyak itu')
# 13.Uang yang Tersisa
money = 20
items = {'apel': 2, 'pisang': 4, 'jeruk': 6}
for item_name in items:
    print('--------------------------------------------------')
    print('Anda memiliki ' + str(money) + ' dolar di dompet Anda')
    print('Harga setiap ' + item_name + ' ' + str(items[item_name]) + ' dolar')
    
    input_count = input('Mau berapa ' + item_name + '?:')
    print('Anda akan membeli ' + input_count + ' ' + item_name)
    
    count = int(input_count)
    total_price = items[item_name] * count
    print('Harga total adalah ' + str(total_price) + ' dolar')
    
    if money >= total_price:
        print('Anda telah membeli ' + input_count + ' ' + item_name)
        money -= total_price
        # Ketika money sama dengan 0, cetak 'Dompet Anda kosong' dan hentikan loop
        if money==0:
            print ('Dompet Anda kosong')
            break
        
        
    else:
        print('Uang Anda tidak mencukupi')
        print('Anda tidak dapat membeli ' + item_name + ' sebanyak itu')
# Menggunakan variable money dan tipe conversion, cetak 'Uang Anda tinggal ___ dolar'
        print ('Uang Anda tinggal ' + str(money) + ' dolar')
