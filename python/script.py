# Dasar-dasar
# 1.String
# Cetak 'Hello World'
print ('Hello World')

# 2.Integer
# Cetak 7 sebagai sebuah integer
print (7)

# Cetak penjumlahan dari 9 dan 3
print(9+3)

# Cetak '9 + 3' sebagai string
print('9 + 3')

# 3.Perhitungan
# Cetak hasil dari 9 / 2
print(9 / 2)

# Cetak hasil dar 7 * 5
print(7 * 5)

# Cetak sisa dari 5 dibagi 2 menggunakan %
print (5%2)

# Variable
# 4. Variable
# Tetapkan 'Bob' ke variable name
name="Bob"

# Cetak nilai dari variable name
print(name)

# Tetapkan 7 ke variable number
number=7

# Cetak nilai dari variable number
print(number)

# 5. Menggunakan Variable
apple_price = 2
apple_count = 8

# Berikan hasil dari apple_price * apple_count ke variable total_price 
total_price=apple_price * apple_count

# Cetak nilai dari variable total_price 
print( total_price)

# 6. Memperbarui Variable
money = 20
print(money)

# Tambahkan 50 ke variable money
money=money+50

# Cetak nilai dari variable money
print(money)

# 7. Penggabungan String
# Tetapkan 'Bob' ke variable my_name 
my_name="Bob"

# Cetak 'Nama saya Bob' dengan menggabungkan variable my_name dan sebuah string
print ("Nama saya"+ my_name)

# 8. Tipe-tipe Data
age = 24
# Cetak 'Saya berusia 24 tahun' menggunakan variable age
print ('Saya berusia'+ str(age)+'tahun')

count = '5'
# Ubah variable count ke tipe data integer, tambahkan 1, dan cetak hasilnya
count=int(count)+1
print(count)

# Boolean dan Kondisi
# 9. Statement if
x = 7 * 10
y = 5 * 6

# Jika x sama dengan 70, cetak 'x adalah 70'
if x == 70:
    print ('x adalah 70')

# Jika y tidak sama dengan 40, cetak 'y bukan 40' 
if y !=40:
    print('y bukan 40')

# 10. Booleans
x = 10
# Jika x lebih besar dari 30, cetak 'x lebih besar dari 30'
if x > 30:
    print ('x lebih besar dari 30')


money = 5
apple_price = 2
# Jika money sama dengan atau lebih besar dari apple_price, cetak 'Anda dapat membeli apel'
if money >= apple_price:
    print ('Anda dapat membeli apel')


# 11. Statement else
money = 2
apple_price = 4

if money >= apple_price:
    print('Anda dapat membeli apel')
# Ketika kondisi di atas adalah False, cetak 'Uang Anda tidak mencukupi'
else :
    print ( 'Uang Anda tidak mencukupi')


# 12. Statement elif
money = 2
apple_price = 2

if money > apple_price:
    print('Anda dapat membeli apel')
# Ketika kedua variable memiliki nilai yang sama, cetak 'Anda dapat membeli apel tetapi dompet Anda akan menjadi kosong'
elif  money == apple_price :
    print ("Anda dapat membeli apel tetapi dompet Anda akan menjadi kosong")

else:
    print('Uang Anda tidak mencukupi')

# 13. Menggabungkan Kondisi
x = 20
# Jika x berkisar antara 10 dan 30 (inklusif), cetak 'x berkisar antara 10 dan 30'
if x >=10 and x <=30:
    print ( 'x berkisar antara 10 dan 30')


y = 60
# Jika y lebih kecil dari 10 atau lebih besar dari 30, cetak 'y lebih kecil dari 10 atau lebih besar dari 30'
if y <10 or y>30 :
    print ('y lebih kecil dari 10 atau lebih besar dari 30')


z = 55
# Jika z tidak sama dengan 77, print 'z bukan 77'
if not z==77:
    print ('z bukan 77')


# Aplikasi Belanja
# 15. Menghitung Harga
# Berikan 2 ke variable apple_price 
apple_price=2

# Berikan 5 ke variable count 
count=5

# Berikan hasil dari apple_price * count ke variable total_price 
total_price=apple_price * count

# Dengan menggunakan varibale count, cetak 'Anda akan membeli .. apel'
print('Anda akan membeli ' + str(count) + ' apel')
# Dengan menggunakan variable total_price, cetak 'Harga total adalah .. dolar'
print('Harga total adalah ' + str(total_price) + '  dolar')

# 16. Mendapat Input
apple_price = 2

# Terima jumlah apel dengan menggunakan input(), dan berikan hasilnya ke variable input_count 
input_count=input("Mau berapa apel?:" )

# Ubah variable input_count ke integer, dan berikan hasilnya ke variable count 
count = int(input_count)
total_price = apple_price * count

print('Anda akan membeli ' + str(count) + ' apel')
print('Harga total adalah ' + str(total_price) + ' dolar')

# 17. Control Flow
apple_price = 2
# Berikan 10 ke variable money 
money=10

input_count = input('Mau berapa apel?: ')
count = int(input_count)
total_price = apple_price * count

print('Anda akan membeli ' + str(count) + ' apel')
print('Harga total adalah ' + str(total_price) + ' dolar')

# Tambahkan control flow berdasarkan perbandingan antara money dan total_price
if money>total_price:
    print ("Anda telah membeli"+str(count)+ "apel")
    print ("Uang Anda tinggal"+str(money - total_price)+ "dolar")
elif money == total_price:
    print('Anda telah membeli ' + str(count) + ' apel')
    print('Dompet Anda kosong')
else:
    print('Uang Anda tidak mencukupi')
    print('Anda tidak dapat membeli apel sebanyak itu')
    
