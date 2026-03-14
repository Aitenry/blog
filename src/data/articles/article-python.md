## #规范代码格式

当学习的程序越来越复杂，就需要一些代码格式设置约定来规范代码，提高代码的可读性...

【PEP 8】：[PEP 8 – Style Guide for Python Code | peps.python.org](https://peps.python.org/pep-0008/)

- 缩进：【PEP 8】建议每一级缩进都使用四个空格，即一个tab键，这既可以提高可读性，又留下了足够的多级缩进空间，缩进体现了上下代码之间的从属关系；
- 行长：建议每行不超过80字符，最初制定这样的指南时，是因为在大多数的计算机中，终端窗口每一行只能容纳79个字符；【PEP 8】建议注释的行长都不超过72字符，因为有一些工具为大型项目自动生成文档时，会在注释开头添加格式化字符;
- 空行：要将不同的方法或者不同的部分隔开，都可以使用空行，但不能滥用；

**注意：Python解释器根据水平缩进情况来解读代码，但不关心垂直间距...**

------



## 1. 变量与简单数据类型

要注意变量的命名规范，避免出现命名错误.  

- 变量名只能包含字母、数字和下划线：变量名可以以字母或下划线开头，但是不能以数字开头；
- 变量名不能包含空格，但可以使用下划线来分隔其中的单词；
- 不要将Python关键字和函数名用做变量名；
- 变量名的命名应该简短又具有描述性；
- Python应该使用小写来命名变量，虽然不会导致错误，但是为了命名规范；

------



### 1.1 String

字符串就是一系列的字符，在Python中，用引号扩起的都是字符串其中的引号可以是单引号，也可以是双引号. 

```python
print("This is a String...")
print('This is a String...')
print('I told my friend, "Python is my favorite language!"')
print("The lanugage 'Python' is named after Monty Python, not the snake.")
print("One of Python's strengths is its diverse and supportive community.")
```

| 函数         | 作用                                                         |
| ------------ | ------------------------------------------------------------ |
| title(  )    | 首字母以大写的方式显示每一个单词，即将每一个单词的首字母改成大写：【'line one'】>【'Line One'】 |
| upper(  )    | 将全部字母转换成大写：【'Luo'】>【'LUO'】                    |
| lower(  )    | 将全部字母转换成小写：【'Luo'】>【'luo'】                    |
| lstrip(  )   | 删除字符串开头的多余空白字符：【' python'】>【'python'】     |
| rstrip(  )   | 删除字符串末尾的多余空白字符：【'python '】>【'python'】     |
| strip(  )    | 同时剔除字符串两端的空白字符：【' python '】>【'python'】    |
| format(name) | 放入参数name，通过占位符注入到字符串里面："Hello {}, would you like to learn some Python today?".format(name) |

| 符号 | 作用                                             |
| ---- | ------------------------------------------------ |
| \n   | 换行                                             |
| \t   | 转义字符，相当于一个tap键，通常宽度相当于8个空格 |

```python
# 替换人名的形式，以小写、大写、首字母大写的方式显示人名
def method(name):
    print("Hello {}, would you like to learn some Python today?".format(name))


if __name__ == '__main__':
    method("Eddie".title())
    method("Eddie".upper())
    method("Eddie".lower())

```

1. f-string 是指以 f ' '开头的字符串，其中以 '{}' 包含的表达式会进行值替换.

   ```python
   # 替换人名的形式，以小写、大写、首字母大写的方式显示人名
   def method(name):
       print(f"Hello {name}, would you like to learn some Python today?")
   
   
   if __name__ == '__main__':
       method("Eddie".title())
       method("Eddie".upper())
       method("Eddie".lower())
   ```

   

2. r-string 是指以 r ' '开头的字符串，可以防止字符串转义，即去掉反斜杠的转移机制.

   ```python
   def method():
       print(r"Hello Eddie, would you like to learn some Python today?\n")
   
   
   if __name__ == '__main__':
       method()
   ```

   

3. u-string 是指以u' '开头的字符串，表示对字符串进行Unicode编码【一般用在中文字符串前面】

   ```python
   def method():
       print(u"点击量")
   
   
   if __name__ == '__main__':
       method()
   ```

   注意：一般英文字符在使用各种编码下，基本都可以正常解析；但是中文，必须表明所需的编码，否则一旦编码转换就会出现乱码，建议所有编码方式采用UTF-8.


------




5. b-string 是指b' '开头的字符串，表示把字符串转换成byte类型.

   ```python
   def method():
       print(b'opi')
   
   
   if __name__ == '__main__':
       method()
   ```

------



### 1.2 Number

数字经常用来表现可视化数据，存储web应用信息...

| 运算符 | 说明 |
| ------ | ---- |
| +      | 加   |
| -      | 减   |
| *      | 乘   |
| /      | 除   |
| **     | 乘方 |

```python
print(2 + 3*4)
>> 14

print((2 + 3) * 4)
>> 20
```

```python
# 小数点位数可能是不确定的，Python通常都会安装你的期望去处理，即输出的小数点是0.3
print(0.2 + 0.1)
>> 0.3 or 0.3000000000004

print(3 * 0.1)
>> 0.3 or 0.3000000000004
```

| 函数名 | 作用                                                         |
| ------ | ------------------------------------------------------------ |
| str    | 类型转换，为了避免类型错误，把其他类型的数据转换成String类型 |

从 Python3 转而用 Python2 或者 从 Python2 转而用 Python3时，会出现这种规范问题，要注意：

```python
# python2.7，编译环境下
print(3 / 2)
>> 1

print(3.0 / 2)
>> 1.5

print(3 / 2.0)
>> 1.5

print(3.0 / 2.0)
>> 1.5

# 在python3，编译环境下
print(3 / 2)
>> 1.5
```

------



## 2. 列表

列表由一系列按特定顺序排列的元素组成，列表通常包含多个元素，给列表指定一个表示复数的名称：letters、digits、names...

```python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles)
print(bicycles[0])
print(bicycles[1])
print(bicycles[3])
print(bicycles[-1])
```

```
>> ['trek', 'cannondale', 'redline', 'specialized']
>> trek
>> cannondale
>> specialized
>> specialized
```

------



### 2.1 修改、添加、删除

#### 2.1.1 修改列表元素

修改列表元素的语法与访问列表元素的语法类似.  要修改列表元素，可以指定列表名和要修改的元素的索引，再指定该元素的新值.

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(mortorcycles)
motorcycles[0] = 'ducati'
print(mortorcycles)
```

```
>> ['honda', 'yamaha', 'suzuki']
>> ['ducati', 'yamaha', 'suzuki']
```

------



#### 2.2.2 添加列表元素

| 函数       | 作用                                           |
| ---------- | ---------------------------------------------- |
| append(  ) | 将元素追加到列表的末尾                         |
| insert(  ) | 提供下标和要插入的元素，直接插入当前下标的位置 |

1. 在末尾添加元素

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
print(mortorcycles)
motorcycles.append('ducati')
print(mortorcycles)
```

```
>> ['honda', 'yamaha', 'suzuki']
>> ['honda', 'yamaha', 'suzuki', 'ducati']
```

------



```python
# 这种创建列表的方式及其常见
motorcycles = []
motorcycles.append('honda')
motorcycles.append('yamaha')
motorcycles.append('suzuki')
print(mortorcycles)
```

```
>> ['honda', 'yamaha', 'suzuki']
```

------



2. 在列表中插入元素

```python
motorcycles = ['honda', 'yamaha', 'suzuki']
motorcycles.insert(0, 'ducati')
print(mortorcycles)
```

```
>> ['ducati', 'honda', 'yamaha', 'suzuki']
```

------



#### 2.2.3 删除列表元素

| 方式       | 作用                                                         |
| ---------- | ------------------------------------------------------------ |
| del        | 该语句可以删除指定的下标元素                                 |
| pop(  )    | 如果不传值，默认删除列表最后一位；反则，以传入的那一个作为下标，删除当前下标下的元素 |
| remove(  ) | 删除列表里面含有的指定元素，以元素值来索检                   |

```python
# del语法
motorcycles = ['hona', 'yamaha', 'suzuki']
print(motorcycles)
del motorcycles[0]
print(motorcycles)
```

```
>> ['hona', 'yamaha', 'suzuki']
>> ['yamaha', 'suzuki']
```

------



```python
# pop函数
motorcycles = ['hona', 'yamaha', 'suzuki']
print(motorcycles)
poppedF_motorcycle = motorcycles.pop()
poppedS_motorcycle = motorcycles.pop(0)
print(motorcycles)
print(poppedF_motorcycle)
print(poppedS_motorcycle)
```

```
>> ['hona', 'yamaha', 'suzuki']
>> ['yamaha']
>> suzuki
>> hona
```

------



```python
# remove函数
motorcycles = ['hona', 'yamaha', 'suzuki']
print(motorcycles)
motorcycles.remove('yamaha')
print(motorcycles)
```

```
>> ['hona', 'yamaha', 'suzuki']
>> ['hona', 'suzuki']
```

------



### 2.2 组织列表

注意：在索引列表元素时候，要注意索引的下标不能超过索引长度，如果要访问最后一位元素可以用-1作为下标，但是列表不能为空

| 方法名      | 作用                                                         |
| ----------- | ------------------------------------------------------------ |
| sort(  )    | 对列表进行永久性排序，传入参数reverse=True可以倒序排列列表里面的元素 |
| sorted(  )  | 对列表进行临时排序，传入参数reverse=True可以倒序排列列表里面的元素 |
| reverse(  ) | 反转列表元素的排列顺序，并且是永久性修改                     |
| len(  )     | 列表长度                                                     |

```python
# sort函数
cars = ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']
cars.sort()  # 传参：reverse=True
print(cars)
```

```
>> ['AUDI', 'BMW', 'SUBARU', 'TOYOTA']
```

------



```python
# sorted函数
cars = ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']
print("Here is the original list:")
print(cars)
print("Here is the sorted list:")
print(sorted(cars))
print("Here is the original list again:")
print(cars)
```

```
>> Here is the original list:
>> ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']
>> Here is the sorted list:
>> ['AUDI', 'BMW', 'SUBARU', 'TOYOTA']
>> Here is the original list again:
>> ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']
```

------



```python
# reverse函数
cars = ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']
print(cars)
cars.reverse()
print(cars)
```

```
>> ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']
>> ['SUBARU', 'TOYOTA', 'AUDI', 'BMW']
```

------



```python
# len函数
cars = ['BMW', 'AUDI', 'TOYOTA', 'SUBARU']
len(cars)
```

```
>> 4
```

------



### 2.3 操作列表

#### 2.3.1 遍历列表元素

注意：

- Python根据缩进来判断代码行与前一个代码行的关系;
- 为了避免出现bug，要严格规范缩进问题;
- 一般条件语句后面都要初始结构体里面的内容，所以要用冒号' : '表示语句的开始.

```python
magicians = ['alice', 'david', 'carolina']
for magician in magicians:  # 取出列表magicians的元素，并赋值给magician
    print(magician)  # 取magician的值，并打印到控制台
```

```
>> alice    
>> david
>> carolina
```

------



#### 2.3.2 创建数字列表

| 函数      | 作用                                                         |
| --------- | ------------------------------------------------------------ |
| range(  ) | 生成一系列的数字，具有区间限制：rang(1, 4)只能输出1到3的数字区间是 [1, 3] |
| list(  )  | 利用range方法生成一个数字列表                                |
| min(  )   | 找出列表里面的最小值                                         |
| max(  )   | 找出列表里面的最大值                                         |
| sum(  )   | 求列表里面所有数字元素的总和                                 |

```python
# range函数
for value in range(1, 5):
    print(value)
```

```
>> 1
>> 2
>> 3
>> 4
```

------



```python
# list函数
numbers = list(range(1, 6, 2))  # 取2倍数的数
print(number)
```

```
>> [2, 4, 6, 8, 10]
```

------



```python
# min & max & sum
digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
min(digits)
max(digits)
sum(digits)
```

```
>> 0
>> 9
>> 45
```

------



进阶写法，用于简化代码

```python
# squares = []
# for value in range(1, 11):
#     square = value**2
#     squares.append(square)
# print(squares)

# 互相等效，下面是简化后的方式
squares = [value**2 for value in range(1, 11)]
print(squares)
```

```
>> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

------



#### 2.3.3 处理列表区间部分

##### 1. 列表区间切片

| 区间  | 说明                                                         |
| ----- | ------------------------------------------------------------ |
| [1:3] | 取“下标1”到“下标2”的元素，包含“下标1”和“下标2”，即区间表示[1,3) |
| [:4]  | 当第一位参数为空的时候默认为起始是列表开头，即取“下标0”到“下标3”的元素，包含“下标0”和“下标3”，区间表示[0,4) |
| [2:]  | 当第二位参数为空的时候默认为取到列表的末尾，即取“下标2”到“下标-1”的元素，包含“下标2”和“下标-1”，区间表示[2,-1] |
| [:-1] | 当第一位参数为空的时候默认为起始是列表开头，即取“下标0”到“下标-1”的元素，包含“下标0”和“下标-1”，区间表示[0,-1] |
| [-3:] | 当第二位参数为空的时候默认为取到列表的末尾，即取“下标-3”到“下标-1”的元素，包含“下标-3”和“下标-1”，区间表示[-3,-1] |

```python
players = ['charles', 'martina', 'michael', 'florence', 'eli']
print(players[1:3])
```

```
>> ['martina', 'michael']
```

------



```python
players = ['charles', 'martina', 'michael', 'florence', 'eli']
print(players[:4])
```

```
>> ['charles', 'martina', 'michael', 'florence']
```

------



```python
players = ['charles', 'martina', 'michael', 'florence', 'eli']
print(players[2:])
```

```
>> ['michael', 'florence', 'eli']
```

------



```python
players = ['charles', 'martina', 'michael', 'florence', 'eli']
print(players[-3:])
```

```
>> ['michael', 'florence', 'eli']
```

------



##### 2. 复制列表

```python
my_foods = ['pizza', 'falafel', 'carrot cake']
friend_foods = my_foods[:]
my_foods.append('cannal')
friend_foods.append('ice cream')
print(my_foods)
print(friend_foods)
```

```
>> ['pizza', 'falafel', 'carrot cake', 'cannal']
>> ['pizza', 'falafel', 'carrot cake', 'ice cream']
```

------



```python
# 这里的赋值并不是副本的储存，而是相互关联
# 当my_foods收到追加信息的时候，friend_foods也会同步追加信息
# 当friend_foods收到追加信息的时候，my_foods也会同步追加信息
my_foods = ['pizza', 'falafel', 'carrot cake']
friend_foods = my_foods
my_foods.append('cannal')
friend_foods.append('ice cream')
print(my_foods)
print(friend_foods)
```

```
>> ['pizza', 'falafel', 'carrot cake', 'cannal', 'ice cream']
>> ['pizza', 'falafel', 'carrot cake', 'cannal', 'ice cream']
```

------



#### 2.3.4 元组

- 在Python语法里面，将不能修改的值称为不可变的，而不可变的列表被称为元组；
- 元组看起来像列表一样，但使用圆括号而不是方括号来标识；
- 定义元组之后，就可以使用索引来访问其中的元素，就像访问列表元素一样；
- 如果想重新修改元组的元素，可以重新给存储元组的变量赋值.

```python
# 取值
dimensions = (30, 60)
print(dimensions[0])
print(dimensions[1])
```

```
>> 30
>> 60
```

```python
# 因为元组是不可修改的列表
dimensions[0] = 10  # 使用该语句会导致报错
```

```python
# 利用for循环进行遍历
dimensions = (30, 60)
for dimension in dimensions:
    print(dimension)
```

```
>> 30
>> 60
```

------



## 3. 条件语句

用if条件语句来处理，需要条件的程序

```python
cars = ['audi', 'bmw', 'subaru', 'toyota']
for car in cars:
    if car == 'bmw':
        print(car.upper())
    else:
        print(car.title())
```

```
>> Audi
>> BMW
>> Subaru
>> Toyota
```

------



```python
# Python中的字符串区分大小写
print('Audi' == 'audi')
print('Audi'.lower() == 'audi')
```

```
>> False
>> True
```

------



```python
print("name" != "nmea")
```

```
>> False
```

------



```python
print(19 < 21)
print(19 <= 21)
print(19 > 21)
print(19 >= 21)
```

```
>> True
>> True
>> False
>> False
```

------



### 3.1 检查多个条件

有时候需要多个条件形成一个条件，这个时候就需要关键字：and 与 or

#### 3.1.1 使用 and 检查多个条件

要检查是否两个条件都为True，才可以进行if语句体里的语法.

```python
numbers = [60, 40, 67, 80, 92, 32]
for number in numbers:
    if(number >= 60 and number <= 70):
        print("number[60, 70]: " + str(number))
```

------



#### 3.1.2 使用 or 检查多个条件

只要其中一个条件为True，才可以进行if语句体里的语法.

```python
foods = ['pizza', 'falafel', 'carrot cake', 'cannal', 'ice cream']
for food in foods:
    if(food == 'ice cream' or food == 'pizza'):
        print("I choose " + food)
```

------



#### 3.1.3 使用 in 检查列表里是否包含某个元素

in关键字能够在创建一个列表后，轻松的检查其中是否包含特定的值.

```python
requested_toppings = ['mushrooms', 'onions', 'pineapple']
'mushrooms' in requested_toppings
```

```
>> True
```

------



#### 3.1.4 使用 not in 检查特定值是否不包括在列表中

not in 关键字能够在创建一个列表后，轻松的确定特定的值是否不在列表里面

```python
banned_users = ['andrew', 'carolina', 'david']
user = 'marie'
if user not in banned_users:
    print(user.title() + ", you can post a response if you wish.")
```

------



#### 3.1.5 使用布尔值：False & True

布尔值的结果只能是两种结果：False 或者 True

```python
user_status = [True, False, False, True, False, True]
username = ['Luo', 'Lucas', 'KK', 'Aiox', 'Pon', 'Q-Fox']
for index, user in enumerate(username):
    print(user + " isOnline: " + str(user_status[index]))
```

------



### 3.2 形成条件语句的关键字

#### 3.2.1 if语句

```python
age = 19
if age >= 18:
    print("You are old enough to vote!")
```

```
>> You are old enough to vote!
```

在if语句中将列表名用在条件表达式中时，Python将在列表至少包含一个元素时返回True，并在列表为空时返回False.

```python
requested_topping = []
if requested_toppings:
    for requested_topping in requested_toppings:
        print("Adding " + requested_topping + ".")
    print("\nFinished making your pizza!")
else:
    print("Are you sure you want a plain pizza?")
```

------



#### 3.2.2 if-else语句

```python
age = 17
if age >= 18:
    print("You are old enough to vote!")
    print("Have you registered to vate yet?")
else:
    print("Sorry, you are too young to vote.")
    print("Please register to vote as soon as you turn 18!")
```

```
>> Sorry, you are too young to vote.
>> Please register to vote as soon as you turn 18!
```

------



```python
available_toppings = ['mushrooms', 'olines', 'green peppers', 'pepperoni', 'extra cheese']
requested_toppings = ['mushrooms', 'french fries', 'extra cheese']
for requested_topping in requested_toppings:
    if requested_topping in available_toppings:
        print("Adding " + requested_topping + ".")
    else:
        print("Sorry, we don't have " + requested_topping + ".")
print("\nFinished making your pizzal!")
```

```
>> Adding mushrooms.
>> Sorry, we don't have french fries.
>> Adding extra cheese.

>> Finished making your pizzal!
```

------



#### 3.2.3 if-elif-else语句

Python并不要求 if-elif 结构后面必须有else代码块.

在有些情况下，else代码块很有用，而在其他一些情况下，使用一条elif语句来处理特定的情形更加合理.

```python
age = 12
if age < 4:
    print("Your admission cost is $0.")
elif age < 18:
    print("Your admission cost is $5.")
else:
    print("Your admission cost is $10.")

# 简化打印
age = 12
if age < 4:
    price = 0;
elif age < 18:
    price = 5;
else:
    price = 10;
print("Your admission cost is $" + str(price) + ".")
```

------



## 4. 字典

访问字典中的值，获取与键相关联的值，可依次指定字典名和放在方括号内的键，俗称键值对

```python
alien_style = {
    'color': 'green', 
    'points': 5
}
print(alien_style['color'])
print(alien_style['points'])
```

```
>> green
>> 5
```

------



### 4.1 修改、添加、删除

#### 4.1.1 修改字典里面Key对应的Value

如果在当前字典里面存在相应的Key，则该语句是修改这个Key的值.

```python
alien_style = {
    'color': 'green', 
    'points': 5
}
alien_style['color'] = 'yellow'
print("The alien is now " + alien_style['color'] + ".")
```

```
>> The alien_style is now yellow.
```

------



#### 4.1.2 添加Key-Value对进入字典

如果在当前字典里面不存在相应的Key，则该语句是添加这个Key-Value对进入字典里面.

```python
alien_style = {
    'color': 'green', 
    'points': 5
}
alien_style['translationX'] = 67
alien_style['translationY'] = 97
print(alien_style)
```

```
>> {'color': 'green', 'points': 5, 'translationX': 67, 'translationY': 97}
```

------



#### 4.1.3 删除字典里面的Key-Value对

- 对于字典中不再需要的信息，可以使用del语句将相应的Key-Value对彻底删除.
- 使用del语句时，必须指定字典名和要删除的键.

```python
alien_style = {
    'color': 'green', 
    'points': 5
}
del alien_style['points']
print(alien_style)
```

```
>> {'color': 'green'}
```

------



### 4.2 遍历字典

一个字典可能只包含几个Key-Value对，也可能包含数百万个Key-Value对. 

由于数据大量，可以用于各种方式的数据储存，所以字典也支持遍历. 

遍历方式：1、遍历字典所有的Key；2、遍历字典所有的Value；3、遍历字典所有的Key-Value对.

------



#### 4.2.1 遍历所有的Key-Value对

注意：

- 即便遍历字典时，Key-Value对的返回顺序也与存储顺序不同. 
- Python不关心Key-Value对的存储顺序，而只跟踪建和值之间的关联关系.

```python
user = {
    'userId': '0823160946',
    'username': 'Lucas',
    'age': 18
}
for key, value in user.items():
    print("{Key, Value}: " + "{" + str(key) + ", " + str(value) + "}")
```

```
>> {Key, Value}: {userId, 0823160946}
>> {Key, Value}: {username, Lucas}
>> {Key, Value}: {age, 18}
```

------



#### 4.2.2 遍历字典中所有的Key

```python
user = {
    'userId': '0823160946',
    'username': 'Lucas',
    'age': 18
}
for key in user.keys():
    print("Key: " + str(key))
```

```
>> Key: userId
>> Key: username
>> Key: age
```

------



***按照顺序遍历字典中所有的Key***

```python
user = {
    'userId': '0823160946',
    'username': 'Lucas',
    'age': 18
}
for key in sorted(user.keys()):
    print("Key: " + str(key))
```

```
>> Key: age
>> Key: userId
>> Key: username
```

------



#### 4.2.3 遍历字典中所有的Value

```python
user = {
    'userId': '0823160946',
    'username': 'Lucas',
    'age': 18
}
for value in user.values():
    print("Value: " + str(value))
```

```
>> Value: 0823160946
>> Value: Lucas
>> Value: 18
```

------



***使用set方法，去除重复的Value***

```python
user_style = {
    'Lucas': 'humor',
    'Luo': 'boring',
    'Aixo': 'optimistic',
    'Loping': 'boring'
}
for value in set(user_style.values()):
    print(value.title())
```

------



### 4.3 字典嵌套

有时候，需要将一系列字典存储在列表中，或将列表作为值存储在字典中，这称之为嵌套.

------



#### 4.3.1 在列表里面存字典

有时候，需要将一系列字典存储在列表中.

```python
aliens = []
for index in range(30):
    new_alien = {
        'color': 'green',
        'points': 5,
        'speed': 'show'
    }
    aliens.append(new_alien)
for index, alien in enumerate(aliens[:3]):
    print("aliens[" + str(index) + "] = " + str(alien))
print("...")
```

```
>> aliens[0] = {'color': 'green', 'points': 5, 'speed': 'show'}
>> aliens[1] = {'color': 'green', 'points': 5, 'speed': 'show'}
>> aliens[2] = {'color': 'green', 'points': 5, 'speed': 'show'}
>> ...
```

------



#### 4.3.2 在字典中存储列表

有时候，需要将列表存储在字典中，而不是将字典存储在列表中.

```python
favorite_languages = {
    'Lucas': ['C#', 'C++'],
    'Eddie': ['Java', 'Python', 'C++', 'JavaScript'],
    'Luo': ['Java', 'PHP', 'C++']
}
print("")
for user, languages in favorite_languages.items():
    print(user + "'s favorite languages are: ")
    for language in languages:
        print(language, end=" ")
    print("\n")
```

```
>> Lucas's favorite languages are: 
>> C# C++ 

>> Eddie's favorite languages are: 
>> Java Python C++ JavaScript 

>> Luo's favorite languages are: 
>> Java PHP C++ 

```

------



#### 4.3.3 在字典中存储字典

可以在字典中嵌套字典，但这样做时，会提高代码的复杂性，不易于解读.

```python
users = {
    'aeinstein': {
        'first': 'albert', 
        'last': 'einstein', 
        'location': 'princeton'
    },
    'mcurie': {
        'first': 'marie', 
        'last': 'curie', 
        'location': 'paris'
    }
}
for username, user_info in users.items():
    print("\nUsername: " + username)
    full_name = user_info['first'] + ", " + user_info['last']
    location = user_info['location']
    
    print("\tFull name: " + full_name.title())
    print("\tLocation: " + location.title())
```

```
>> Username: aeinstein
>> 		Full name: Albert, Einstein
>> 		Location: Princeton

>> Username: mcurie
>> 		Full name: Marie, Curie
>> 		Location: Paris
```

------



## 5. 用户输入与while循环

### 5.1 用户输入

- 函数input()让程序暂停运行，等待用户输入一些文本；
- 获取用户输入的值之后，再将值赋给一个变量中，供程序使用.

```python
message = input("Tell me something, and I will repeat it back to you: ")
print(massage)
```

```
>> Tell me something, and I will repeat it back to you: Hello everyone!
>> Hello everyone!
```

------



#### 5.1.1 使用int函数来获取数值输入

- 使用input函数的时候，Python将用户输入解读为字符串;
- 这个时候，如果需要int类型的数据要用int函数强转类型.

```python
age = int(input("How old are you? "))
print("Are you over 18 years old? >> " + age >= 18)
```

------



#### 5.1.2 求模运算符

在处理数据值信息时，求模运算符\<%>是一个很有用的符号，作用：将两个数相除并返回余数.

```python
number = int(input("Enter a number, and I'll tell you if it's even or odd: "))
if number % 2 == 0:
    print("The number " + str(number) + " is even.")
else:
    print("The number " + str(number) + "is odd.")
```

```
>> Enter a number, and I'll tell you if it's even or odd: 42
>> The number 42 is even.
```

------



### 5.2 while循环语句

for循环用于针对集合中的每一个元素的一个代码块，而while循环不断地运行，直到指定的条件不满足为止.

```python
current_number = 1
while current_number <= 5:
    print(current_number, end=" ")
    current_number += 1
```

```
>> 1 2 3 4 5 
```

------



#### 5.2.1 用户选择何时退出

```python
prompt = "\nTell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: "
message = ""
while message != 'Quit':
    message = input(prompt)
    if message == 'Quit':
        print("Exit loop statement...")
    else:
        print("You say: " + message)
```

```
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: 7966
>> You say: 7966

>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: again 7966
>> You say: again 7966

>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: Quit
>> Exit loop statement...
```

------



#### 5.2.2 使用标志符

使用boolean类型的数据作为变量，为while语句的逻辑提供灵活性，即标志符.

```python
prompt = "\nTell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: "
active = True
while active:
    message = input(prompt)
    if message == 'Quit':
        print("Exit loop statement...")
        active = False
    else:
        print("You say: " + message)
```

```
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: 7966
>> You say: 7966

>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: again 7966
>> You say: again 7966

>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: Quit
>> Exit loop statement...
```

------



#### 5.2.3 使用break关键字

如果要立即退出while循环，不再运行循环中余下的代码，可以使用break语句

```python
prompt = "\nTell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: "
while True:
    message = input(prompt)
    if message == 'Quit':
        print("Exit loop statement...")
        break
    else:
        print("You say: " + message)
```

```
>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: 7966
>> You say: 7966

>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: again 7966
>> You say: again 7966

>> Tell me something, and I will repeat it back to you >> [Enter 'Quit' to end the program.]: Quit
>> Exit loop statement...
```

------



#### 5.2.4 使用continue关键字

- 如果要返回到循环开头，并根据条件测试结果决定是否继续执行循环，可以使用continue关键字；
- 它不像break语句那样不再执行余下代码并退出整个循环.

```python
current_number = 0
while current_number < 10:
    current_number += 1
    if current_number % 2 == 0:
        continue
    print(current_number, end=" ")
```

```
>> 1 3 5 7 9 
```

------



#### 5.2.5 要避免无限循环

每一个while循环语句都必须有停止运行的途径，为了防止循环一直循环下去，占用大量的内存空间.

```python
# 正确的循环语句
x = 1
while x <= 5:
    print(x, end=" ")
    x += 1
```

```python
# 错误的循环语句
x = 1
while x <= 5:
    print(x)
```

------



#### 5.2.6 处理列表和字典

- for循环是一种遍历列表的有效方式，但在for循环中不应该修改列表，否则将导致Python难以跟踪其中的元素；
- 要在遍历列表的同时对其进行修改，可以使用while循环；
- 通过将while循环同列表和字典结合起来使用，可以收集、存储并组织大量输入，供以后查看和显示

------



##### 1. 在列表之间移动元素

```python
unconfirmed_users = ['alice', 'brian', 'candace']
confirmed_users = []

while unconfirmed_users:
    current_user = unconfirmed_users.pop()
    print("Verifying user: " + current_user.title())
    confirmed_user.append(currend_user)
print("\nThe following users have been confirmed: ")
for confirmed_user in confirmed_users:
    print(confirmed_user.title())
```

```
>> Verifying user: Candace
>> Verifying user: Brian
>> Verifying user: Alice

>> The following users have been confirmed: 
>> Candace
>> Brian
>> Alice
```

------



##### 2. 删除包含特定值的所有列表元素

```python
pets = ['dog', 'cat', 'goldfish', 'cat', 'rabbit', 'cat']
while 'cat' in pets:
    pets.remove('cat')
print(pets)
```

```
>> ['dog', 'goldfish', 'rabbit']
```

------



##### 3. 使用用户输入来填充字典

```python
responses = {}
polling_active = True
while polling_active:
    name = input("\nWhat's you name? ")
    response = input("Which mountain would you like climb someday? ")
    responses[name] = response
    repeat = input("Would you like to let another person respond? (Yes / No) >> ")
    if repeat == 'No':
        polling_active = False
print("\n--- Poll Results ---")
for name, response in responses.items():
    print(name + " would like to climb " + response + ".")
```

```
>> What's you name? lucas
>> Which mountain would you like climb someday? lkl
>> Would you like to let another person respond? (Yes / No) >> Yes

>> What's you name? lucas
>> Which mountain would you like climb someday? Denali
>> Would you like to let another person respond? (Yes / No) >> No

>> --- Poll Results ---
>> lucas would like to climb Denali.
```

------



## 6. 函数

### 6.1 定义函数

这是最简单的函数结构，使用关键字def来定义一个函数.

```python
def greet_user():
    print("Hello!")


greet_user()
```

```
>> Hello!
```

------



#### 6.1.1 向函数传递信息

```python
def greet_user(username):
    print("Hello, " + username.title() + "!")


greet_user("lucas")
```

```
>> Hello, Lucas!
```

------



#### 6.1.2 实参与形参

- 实参是调用函数时传递给函数的信息 >> "lucas"；
- 形参是调用函数完成其工作所需的一项信息 >> username.

```python
def greet_user(username):
    print("Hello, " + username.title() + "!")


greet_user("lucas")
```

------



### 6.2 传递实参

- 鉴于函数定义中可能包含多个形参，因此函数调用中也可能包含多个实参；
- 向函数传递实参的方式很多，可以使用位置实参，这要求实参的顺序与形参的顺序相同；
- 也可以使用关键字实参，其中每一个实参都由变量名和值组成，还可以使用列表和字典.

------



#### 6.2.1 位置实参

- 调用函数时，Python必须将函数调用中的每一个实参都关联到函数定义中的一个形参；
- 为此，最简单的关联方式是基于实参的顺序，这种关联方式被称为位置实参.

```python
def describe_pet(animal_type, pet_name):
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")


describe_pet('hamster', 'harry')
```

```
>> I have a hamster.
>> My hamster's name is Harry.
```

------



##### 1. 调用函数多次

可以根据需要调用函数任意次.

```python
def describe_pet(animal_type, pet_name):
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")


describe_pet('hamster', 'harry')
describe_pet('dog', 'willie')
```

```
>> I have a hamster.
>> My hamster's name is Harry.

>> I have a dog.
>> My dog's name is willie.
```

------



##### 2. 位置实参的顺序很重要

使用位置实参来调用函数时，如果实参的顺序不正确，结果可能会出现偏差.

```python
def describe_pet(animal_type, pet_name):
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")


describe_pet('harry', 'hamster')
```

```
>> I have a harry.
>> My harry's name is Hamster.
```

------



#### 6.2.2 关键字实参

- 关键字实参是传递给函数的<名称-值>对，该形式直接在实参中将名称和值关联起来；
- 因此向函数传递实参时不会混淆，关键字实参让开发者无需考虑函数调用中的实参的顺序，还清楚地指出了函数调用中的各个值的用途.

注意：使用关键字实参时，务必准确地指定函数定义中的形参名.

```python
def describe_pet(animal_type, pet_name):
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")


describe_pet(animal_type='hamster', pet_name='harry')
```

```
>> I have a harry.
>> My harry's name is Hamster.
```

------



#### 6.2.3 默认值

- 编写函数时，可以给每一个形参指定默认值；
- 在调用函数中给形参提供了实参时，Python将使用指定的实参值；
- 如果不给拥有默认值的形参提供值，函数将使用形参的默认值；

注意：使用默认值时，在形参列表中必须先列出没有默认值的形参，再列出有默认值的形参，这让Python依然能够正确地解读位置实参.

```python
def describe_pet(animal_type, pet_name='harry'):
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")


describe_pet(animal_type='hamster')
```

```
>> I have a harry.
>> My harry's name is Hamster.
```

------



```python
def describe_pet(animal_type, pet_name='harry'):
    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")


describe_pet('hamster')
```

```
>> I have a harry.
>> My harry's name is Hamster.
```

------



### 6.3 返回值

- 函数并非总是直接显示输出，相反，它可以处理一些数据，并返回一个或一组值，函数返回的值被称为返回值；
- 在函数中，可使用return语句将值返回到调用函数的代码行；
- 返回值可以让开发者能够将程序的大部分繁重工作移到函数中去完成，从而简化主程序.

------



#### 6.3.1 返回简单值

```python
def get_formatted_name(first_name, last_name):
    full_name = first_name + ' ' + last_name
    return full_name.title()


print(get_formatted_name('jimi', 'hendrix'))
```

```
Jimi Hendrix
```

------



#### 6.3.2 让实参变成可选

```python
def get_formatted_name(first_name, last_name, middle_name=''):
    if middle_name:
        full_name = first_name + ' ' + middle_name + ' ' + last_name
    else:
        full_name = first_name + ' ' + last_name
    return full_name.title()


print(get_formatted_name('jimi', 'hendrix'))
print(get_formatted_name('john', 'hooker', 'lee'))
```

```
>> Jimi Hendrix
>> John Lee Hooker
```

------



#### 6.3.3 返回字典

函数可返回任何类型的值，包括列表和字典等较为复杂的数据结构.

```python
def build_person(first_name, last_name):
    person = {
        'first': first_name, 
        'last': last_name
    }
    return person


print(build_person('jimi', 'hendrix'))
```

```
>> {'first': 'jimi', 'last': 'hendrix'}
```

------



```python
def build_person(first_name, last_name, age=''):
    person = {
        'first': first_name, 
        'last': last_name
    }
    if age:
        person['age'] = age
    return person


print(build_person('jimi', 'hendrix', age=27))
```

```
>> {'first': 'jimi', 'last': 'hendrix', 'age': 27}
```

------



#### 6.3.4 结合使用函数和while循环语句

```python
def get_formatted_name(first_name, last_name):
    full_name = first_name + ' ' + last_name
    return full_name.title()

while True:
    print("\nPlease tell me your name: ")
    print("Enter 'Q' at any time to quit")
    f_name = input("First name: ")
    if f_name == 'Q':
        break
    l_name = input("Last name: ")
    if l_name == 'Q':
        break
   	
    formatted_name = get_formatted_name(f_name, l_name)
    print("\nHello, " + formatted_name + "!")
```

```
>> Please tell me your name: 
>> Enter 'Q' at any time to quit
>> First name: eric
>> Last name: matthes

>> Hello, Eric Matthes!

>> Please tell me your name: 
>> Enter 'Q' at any time to quit
>> First name: Q
```

------



### 6.4 传递列表

- 向函数传递列表很有用，列表包含的可能是名字、数字或更复杂的对象<字典>；
- 将列表传递给函数后，函数就能直接访问其内容；

```python
def greet_users(names):
    for name in names:
        msg = "Hello, " + name.title() + "!"
        print(msg)


usernames = ['hannah', 'ty', 'margot']
greet_users(usernames)
```

```
>> Hello, Hannah!
>> Hello, Ty!
>> Hello, Margot!
```

------



#### 6.4.1 在函数中修改列表

- 将列表传递给函数后，函数就可以对其进行修改；
- 在函数中对这个列表所做的任何修改都是永久性的，这可以让开发者能够高效的处理大量的数据.

```python
def print_models(unprinted_designs, completed_models):
    while unprinted_designs:
        current_design = unprinted_designs.pop()
        print("Printing model: " + current_design)
        completed_models.append(current_design)


def show_completed_models(completed_models):
    print("\nThe following models have been printed:")
    for completed_model in completed_models:
        print(completed_model)


unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
completed_models = []

print_models(unprinted_designs, completed_models)
show_completed_models(completed_models)
```

```
>> Printing model: dodecahedron
>> Printing model: robot pendant
>> Printing model: iphone case

>> The following models have been printed:
>> dodecahedron
>> robot pendant
>> iphone case
```

------



#### 6.4.2 禁止函数修改列表

通过切片表示法[:]创建列表的副本.

```python
function_name(list_name[:])
```

实例：

```python
def print_models(unprinted_designs, completed_models):
    while unprinted_designs:
        current_design = unprinted_designs.pop()
        print("Printing model: " + current_design)
        completed_models.append(current_design)


def show_completed_models(completed_models):
    print("\nThe following models have been printed:")
    for completed_model in completed_models:
        print(completed_model)


unprinted_designs = ['iphone case', 'robot pendant', 'dodecahedron']
completed_models = []

print_models(unprinted_designs[:], completed_models)
show_completed_models(completed_models)
```

```
>> Printing model: dodecahedron
>> Printing model: robot pendant
>> Printing model: iphone case

>> The following models have been printed:
>> dodecahedron
>> robot pendant
>> iphone case
```

------



### 6.5 传递任意数量的实参

如果预先不知道函数需要接受多少个实参，Python允许函数从调用语句中收集任意数量的实参.

```python
def make_pizza(*toppings):
    print("\nMaking a pizza with the following topping:")
    for topping in toppings:
        print("- " + topping)


make_pizza('pepperoni')
make_pizza('mushrooms', 'green peppers', 'extra cheese')
```

```
>> Making a pizza with the following topping:
>> - pepperoni

>> Making a pizza with the following topping:
>> - mushrooms
>> - green peppers
>> - extra cheese
```

------



#### 6.5.1 结合使用位置实参和任意数量实参

- 如果让函数接受不同类型的实参，必须在函数定义中将接纳任意数量实参的形参放在最后；
- Python先匹配位置实参和关键字实参，再将余下的实参都收集到最后一个形参中.

```python
def make_pizza(size, *toppings):
    print("\nMaking a " + str(size) + "-inch pizza with the following topping:")
    for topping in toppings:
        print("- " + topping)


make_pizza(16, 'pepperoni')
make_pizza(12, 'mushrooms', 'green peppers', 'extra cheese')
```

```
>> Making a 16-inch pizza with the following topping:
>> - pepperoni

>> Making a 12-inch pizza with the following topping:
>> - mushrooms
>> - green peppers
>> - extra cheese
```

------



#### 6.5.2 使用任意数量的关键字实参

- 如果需要接受任意数量的实参，但预先不知道传递给函数的会是什么样的信息；
- 在这种情况下，可以将函数编写成能够接受任意数量的Key-Value对；
- 函数dict用于创建一个字典.

```python
def build_profile(first, last, **user_info):
    profile = dict()
    profile['first_name'] = first
    profile['last_name'] = last
    for key, value in user_info.items():
        profile[key] = value
    return profile


user_profile = build_profile(
    'albert', 'einstein', 
    location='princeton', 
    field='physics'
)
print(user_profile)
```

```
>> {'first_name': 'albert', 'last_name': 'einstein', 'location': 'princeton', 'field': 'physics'}
```

------



### 6.6 将函数存储在模块中

- 通过将函数存储在独立的文件中，可隐藏程序代码的细节，将重点放在程序的高层逻辑上；
- 将函数存储在模块中，可以让不同的程序重用函数，还可以与其他的开发者共享这些封装好的函数库.

------



#### 6.6.1 导入整个模块

```python
# utiltips.py
def element(size, *names):
    print("\nMaking a " + str(size) + " size parts are: ")
    for name in names:
        print("- " + name.title())
```

```python
import utiltips

utiltips.element(16, 'screw')
utiltips.element(12, 'hexagon bolt', 'hexagon nut')
```

```
>> Making a 16 size parts are: 
>> - Screw

>> Making a 12 size parts are: 
>> - Hexagon Bolt
>> - Hexagon Nut
```

------



#### 6.6.2 导入特定的函数

导入模块中特定的函数

```python
from module_name import function_name
```

通过用逗号分隔函数名，导入模块中需要的多个函数

```python
from module_name import function_01, function_02, function_03
```

实例：

```python
# utils.py
def element(size, *names):
    print("\nMaking a " + str(size) + " size parts are: ")
    for name in names:
        print("- " + name.title())
```

```python
from utils import element

element(16, 'screw')
element(12, 'hexagon bolt', 'hexagon nut')
```

```
>> Making a 16 size parts are: 
>> - Screw

>> Making a 12 size parts are: 
>> - Hexagon Bolt
>> - Hexagon Nut
```

------



#### 6.6.3 使用as给函数指定别名

给函数指定别名的语法

```python
from module_name import function_name as fn
```

实例：

```python
# utils.py
def element(size, *names):
    print("\nMaking a " + str(size) + " size parts are: ")
    for name in names:
        print("- " + name.title())
```

```python
from utils import element as el

el(16, 'screw')
el(12, 'hexagon bolt', 'hexagon nut')
```

```
>> Making a 16 size parts are: 
>> - Screw

>> Making a 12 size parts are: 
>> - Hexagon Bolt
>> - Hexagon Nut
```

------



#### 6.6.4 使用as给模块指定别名

给模块指定别名用法

```python
import module_name as mn
```

实例：

```python
# utils.py
def element(size, *names):
    print("\nMaking a " + str(size) + " size parts are: ")
    for name in names:
        print("- " + name.title())
```

```python
import utils as us

us.element(16, 'screw')
us.element(12, 'hexagon bolt', 'hexagon nut')
```

```
>> Making a 16 size parts are: 
>> - Screw

>> Making a 12 size parts are: 
>> - Hexagon Bolt
>> - Hexagon Nut
```

------



#### 6.6.5 导入模块中的所有函数

- 使用星号<*>运算符可以让Python导入模块中的所有函数，很少用，最好不要用这种方法导入函数；
- 当项目大的时候，把所有函数都导入进来，会占用资源，因为有一些的函数用不到；
- 如果模块中有函数的名称与项目里面使用的名称相同，可能会导致函数被覆盖掉.

```python
from module_name import *
```

实例：

```python
# utils.py
def element(size, *names):
    print("\nMaking a " + str(size) + " size parts are: ")
    for name in names:
        print("- " + name.title())
```

```python
from utils import *

us.element(16, 'screw')
us.element(12, 'hexagon bolt', 'hexagon nut')
```

```
>> Making a 16 size parts are: 
>> - Screw

>> Making a 12 size parts are: 
>> - Hexagon Bolt
>> - Hexagon Nut
```

------



## 7. 类

### 7.1 创建与使用类

#### 7.1.1 创建Dog类

根据开发者需要的属性和函数，创建相应的类.

| 运用           | 作用                                           |
| -------------- | ---------------------------------------------- |
| \__init__(   ) | 初始化类结构体内的变量                         |
| self           | 以self为前缀的变量都可以提供给；类中的方法使用 |

```python
class Dog:
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def sit(self):
        print(self.name.title() + " is now sitting.")
    
    def roll_over(self):
        print(self.name.title() + " rolled over!")
```

------



#### 7.1.2 根据类创建实例

```python
my_dog = Dog('willie', 6)
print("My dog's name is " + my_dog.name.title() + " and it's " + str(my_dog.age) + " years old.")
```

```
>> My dog's name is Willie and he's 6 years old.
```

------



1. 访问属性

```python
my_dog.name
my_dog.age
```

------



2. 调用方法

```python
my_dog = Dog('willie', 6)
my_dog.sit()
my_dog.roll_over()
```

------



3. 创建多个实例

```python
my_dog = Dog('willie', 6)
my_dog.sit()
my_dog.roll_over()

your_dog = Dog('lucy', 3)
your_dog.sit()
your_dog.roll_over()
```

------



### 7.2 使用类与实例

#### 7.2.1 创建Car类

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())
```

```
>> 2016 Audi A4
```

------



#### 7.2.2 给属性指定默认值

- 类中的每一个属性都必须有初始值，哪怕这个值是0或者空字符串；
- 在有些情况下，如果设置默认值的时候，在方法\__init__( )内指定这种初始值是可行的；
- 如果对某一个属性这样做了，就不需要包含为它提供初始值的形参.

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")
    
my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())
my_new_car.read_odometer()
```

```
>> 2016 Audi A4
>> This car has 0 miles on it.
```

------



#### 7.2.3 修改属性的值

1. 直接修改属性的值

不推荐：要修改一个值，最简单粗暴的方法就是通过实例直接访问它，并赋值.

```python
# utils.py
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")
```

```python
from utils import Car

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())

my_new_car.odometer_reading = 23
my_new_car.read_odometer()
```

```
>> 2016 Audi A4
>> This car has 23 miles on it.
```

------



2. 通过方法修改属性的值

推荐使用：一般通过创建一个更新方法，就不需要直接访问属性，直接将值传递给一个方法，让它的内部进行更新.

```python
# utils.py
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")
        
    def update_odometer(self, mileage):
        self.odometer_reading = mileage
```

```python
from utils import Car

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())

my_new_car.update_odometer(23)
my_new_car.read_odometer()
```

```
>> 2016 Audi A4
>> This car has 23 miles on it.
```

------



3. 通过方法对属性的值进行递增

- 有时候需要将属性值递增特定的量，而不是将其设置为全新的值.
- 有时候，需要注意安全问题：当要增加里程数的时候，为了避免黑客的恶意注入，要禁止任何人将里程表读数往回调.

```python
# utils.py
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")
        
    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
        	self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")
        
    def increment_odometer(self, miles):
        self.odometer_reading += miles
```

```python
from utils import Car

my_new_car = Car('audi', 'a4', 2016)
print(my_new_car.get_descriptive_name())

my_new_car.update_odometer(23500)
my_new_car.read_odometer()

my_new_car.increment_odometer(100)
my_new_car.read_odometer()
```

```
>> 2016 Audi A4
>> This car has 23500 miles on it.
>> This car has 23600 miles on it.
```

------



### 7.3 类的继承关系

- 一个类继承另一个类时，它将自动获得另一个类的所有属性和方法；
- 原有的类称为父类，而新类称为子类；
- 子类继承了其父类的所有属性和方法，同时还可以定义自己的属性和方法.

------



#### 7.3.1 子类的\__init__(  )方法

```python
# utils.py
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")
        
    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
        	self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")
        
    def increment_odometer(self, miles):
        self.odometer_reading += miles
```

```python
from utils import Car


class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)  # 初始化父类的属性


my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
```

```
>> 2016 Tesla Model S
```

------



#### 7.3.2 给子类定义属性和方法

让一个类继承另一个类后，可以添加区分子类和父类所需的新属性和方法.

```python
# utils.py
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")
        
    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
        	self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")
        
    def increment_odometer(self, miles):
        self.odometer_reading += miles
```

```python
from utils import Car


class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)  # 初始化父类的属性
        self.battery_size = 70 # 再初始化子类特有的属性
    
    def describe_battery(self):
        print("This car has a " + str(self.battery_size) + "-KWH battery.")


my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
my_tesla.describe_battery()
```

```
>> 2016 Tesla Model S
>> This car has a 70-KWH battery.
```

------



#### 7.3.3 重写父类的方法

- 对于父类的方法，只要它不符合子类模拟实物的行为，都可以对其进行重写；
- 所以，可以在子类中定义一个这样的方法，即它与需要重写的父类方法同名.

```python
# utils.py
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")
        
    def fill_gas_tank(self):
        print("Be Meaningless...")
        
    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
        	self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")
        
    def increment_odometer(self, miles):
        self.odometer_reading += miles
```

```python
from utils import Car


class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)  # 初始化父类的属性
        self.battery_size = 70 # 再初始化子类特有的属性
    
    def describe_battery(self):
        print("This car has a " + str(self.battery_size) + "-KWH battery.")
    
    # 重写该方法
    def fill_gas_tank(self):
        print("This car doesn't need a gas tank!")


my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
my_tesla.describe_battery()
my_tesla.fill_gas_tank()
```

```
>> 2016 Tesla Model S
>> This car has a 70-KWH battery.
>> This car doesn't need a gas tank!
```

------



#### 7.3.4 将实例用做属性

- 当属性和方法清单以及文件行数越来越长，就需要将类的一部分作为一个独立的类提取出来；
- 可以将大型类拆分成多个协同的小类，并不断给这些小类添加细节，即需求方法.

```python
# utils.py
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0
    
    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()
    
    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")
        
    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
        	self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")
        
    def increment_odometer(self, miles):
        self.odometer_reading += miles



class Battery:
    def __init__(self, battery_size=70):
        self.battery_size = battery_size
    
    def describe_battery(self):
        print("This car has a " + str(self.battery_size) + "-KWH battery.")
```

```python
import utils


class ElectricCar(utils.Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)  # 初始化父类的属性
        self.battery = utils.Battery()  # 再初始化子类特有的属性


my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
my_tesla.battery.describe_battery()  # 调用新类里面的方法
```

```
>> 2016 Tesla Model S
>> This car has a 70-KWH battery.
```

注意：当需要新类的方法时候，调用的方式如下

```python
object_variable.new_object_class.function()
```

------



### 7.4 导入类

1. 导入单个类

```python
from module_name import class_name
```

------



2. 从一个模块中导入多个类

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

    def read_odometer(self):
        print("This car has " + str(self.odometer_reading) + " miles on it.")

    def update_odometer(self, mileage):
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        self.odometer_reading += miles


class Battery:
    def __init__(self, battery_size=70):
        self.battery_size = battery_size

    def describe_battery(self):
        print("This car has a " + str(self.battery_size) + "-KWH battery.")


class ElectricCar(Car):
    def __init__(self, make, model, year):
        super().__init__(make, model, year)  # 初始化父类的属性
        self.battery = Battery()  # 再初始化子类特有的属性

```

```python
from utils import Car, ElectricCar


my_beetle = Car('volkswagen', 'beetle', 2016)
print(my_beetle.get_descriptive_name())

my_tesla = ElectricCar('tesla', 'model s', 2016)
print(my_tesla.get_descriptive_name())
```

```
>> 2016 Volkswagen Beetle
>> 2016 Tesla Model S
```

------



3. 导入整个模块

```python
import module_name
```

------



4. 导入模块中的所有类

```python
from module_name import *
```

------



5. 在模块中导入另一个模块

```python
from utils import Car

class Battery:
    --snip--

class ElectricCar(Car):
    --snip--
```

------



## 8. 文件与异常

### 8.1 从文件中读取数据

#### 8.1.1 读取整个文件

1. 创建TXT文件，并放入数据.

```
3.1415926535
```

------



2. 代码部分

```python
# 要注意路径问题
with open('PI.txt') as file:
    contents = file.read()
    print(contents)
```

------



3. 结果

```
>> 3.1415926535
```

------



#### 8.1.2 文件路径

注意：

- Windows系统有时能够正确地解读文件路径中的斜杠，如果使用Windows系统，且结果不符合预期，请确保在文件路径中使用的是反斜杠；
- 由于反斜杠在Python中被视为转义标记，为了在Windows中确保正确读取路径，应在原始字符串的方式指定路径，即在开头的单引号前加上r.



在Linux与OSX系统中，绝对路径如下：

```
/home/ehmatthes/other_files/text_files/filename.txt
```

------



在Windows系统，绝对路径如下：

```
C:\Users\ehmatthes\other_files\text_files\filename.txt
```

------



#### 8.1.3 逐行读取

- 关键字with，负责妥善地打开和关闭文件.
- 要以每次一行的方式检查文件，可对文件对象使用for循环.
- 消除多余的空白行，用rstrip().

***PI.txt***

```
3.415926535
  897932384
  626433832
```

------



```python
filename = 'PI.txt'

with open(filename) as file_object:
    for line in file_object:
        print(line.rstrip())
```

------



```python
filename = 'PI.txt'

with open(filename) as file_object:
    lines = file_object.readlines()

for line in lines:
    print(line.rstrip)
```

------



#### 8.1.4 使用文件内容

```python
filename = 'PI.txt'

with open(filename) as file_object:
    lines = file_object.readlines()
    
pi_string = ''
for line in lines:
    pi_string += line.strip()

print(pi_string)
print("PI Length: " + str(len(pi_string)))
```

------



#### 8.1.5 截取圆周率位数

```python
filename = 'PI.txt'

with open(filename) as file_object:
    lines file_object.readlines()
    
pi_string = ''
for line in lines:
    pi_string += line.strip()

print(pi_string[:52] + "...")
print("PI Length: " + str(len(pi_string)))
```

------



### 8.2 写入文件

- 保存数据的最简单的方式之一是将其写入到文件中.
- 通过将输出写入文件，即便关闭包含程序输出的终端窗口，这些输出也依然存在.
- 开发者可以在程序结束运行后查看这些输出，可以和别人分享输出文件，还可以编写程序来将这些输出读取到内存中并进行处理.

------



#### 8.2.1 写入空文件

注意：Python只能将字符串写入文本文件，要将数值数据存储到文本文件中，必须先使用函数str( )将其转换为字符串格式.

```python
filename = 'programming.txt'

with open(filename, 'w') as file_object:
    file_object.write("I love programming.")
```

```
I love programming.
```

------



#### 8.2.2 写入多行数据

注意：要每一个字符串占一行，这个时候就需要换行符 >> \n

```python
filename = 'programming.txt'

with open(filename, 'w') as file_object:
    file_object.write("I love programming.\n")
    file_object.write("I love creating new games.\n")
```

```
I love programming.
I love creating new games.
```

------



#### 8.2.3 将信息追加到文件

如果需要给文件添加内容，而不是覆盖原有的内容，可以使用追加的方式打开文件；

```python
filename = 'programming.txt'

with open(filename, 'a') as file_object:
    file_object.write("I also love finding meaning in large datasets.\n")
    file_object.write("I love creating app that can run in a browser.\n")
```

```
I love programming.
I love creating new games.
I also love finding meaning in large datasets.
I love creating app that can run in a browser.
```

------



### 8.3 异常

- 异常的特殊对象来管理程序执行期间发生的错误；
- Python在处理py文件的时候，发生的错误，它都会创建一个异常对象；
- 如果开发者编写了处理该异常的代码，程序将继续运行；
- 如果开发者未对异常进行处理，程序将停止，并显示traceback，其中包含有关异常的报告.

------



#### 8.3.1 使用异常避免崩溃

- 使用try-except代码块，来处理异常导致的程序崩溃.
- 在except语句里面使用pass关键字，表示当遇到错误，什么都不用管直接跳过异常.

```python
# 原程序
# 当输入0的时候，程序会报错，程序被强制性停止
print("Give me two numbers, and I'll divide them.")
print("Enter 'Q' to quit.")

while True:
    first_number = input("\nFirst number: ")
    if first_number == 'Q':
        break
    second_number = input("\nSecond number: ")
    if second_number == 'Q':
        break
    answer = int(first_number) / int(second_number)
    print(answer)
```

------

**基于ZeroDivisionError的异常处理**

```python
# 使用try-except改进程序
print("Give me two numbers, and I'll divide them.")
print("Enter 'Q' to quit.")

while True:
    first_number = input("\nFirst number: ")
    if first_number == 'Q':
        break
    second_number = input("\nSecond number: ")
    if second_number == 'Q':
        break
    try:
    	answer = int(first_number) / int(second_number)
    except ZeroDivisionError:
        print("You can't divide by 0!")
    else:
    	print(answer)
```

------



#### 8.3.2 处理FileNotFoundError异常

```python
filename = 'alice.txt'

try:
    with open(filename) as file:
        contents = file.read()
except FileNotFoundError:
    msg = "Sorry, the file " + filename + " does not exist."
    print(msg)
```

```
>> Sorry, the file alice.txt does not exist.
```

------



#### 8.3.3 分析文本

| 函数名    | 作用                                                         |
| --------- | ------------------------------------------------------------ |
| split(  ) | 以空格为分隔符将字符串分拆成多个部分，并将这些部分都存储到一个列表中 |

```python
title = "Alice in Wonderland"
print(title.split())
```

```
>> ['Alice', 'in', 'Wonderland']
```

------



```python
filename = 'alice.txt'

try:
    with open(filename) as file:
        contents = file.read()
except FileNotFoundError:
    msg = "Sorry, the file " + filename + " does not exist."
    print(msg)
else:
    words = contents.split()
    num_words = len(words)
    print("The file " + filename + " has about " + str(num_words) + " words.")
```

```
>> The file alice.txt has about 29461 words.
```

------



#### 8.3.4 使用多个文件

```python
def count_words(filename):
    try:
        with open(filename) as file:
            contents = file.read()
    except FileNotFoundError:
        msg = "Sorry, the file " + filename + " does not exist."
        print(msg)
    else:
        words = contents.split()
        num_words = len(words)
        print("The file " + filename + " has about " + str(num_words) + " words.")


filenames = ['alice.txt', 'siddhartha.txt', 'moby_dick.txt', 'little_women.txt']
for filename in filenames:
    count_words(filename)
```

```
>> The file alice.txt has about 29461 words.
>> Sorry, the file siddhartha.txt does not exist.
>> The file moby_dick.txt has about 215136 words.
>> The file little_women.txt has about 189079 words.
```

------



### 8.4 存储数据

一般来说，存储数据最常用的格式存储是JOSN数据格式；

注意：JSON ( JavaScript Object Notation ) 格式最初是为JavaScript开发的，但随后成了一种常见格式，被包括Python在内的众多语言采用.

------



#### 8.4.1 使用 json.dump() 与 json.load()

1. 使用json.dump()存储数据：

```python
import json

numbers = [2, 3, 5, 7, 11, 13]

filename = 'numbers.json'
with open(filename, 'w') as file:
    json.dump(numbers, file)
```

文件里面的信息：

```
[2, 3, 5, 7, 11, 13]
```

------



2. 使用json.load()加载存储的数据：

```python
import json

filename = 'numbers.json'
with open(filename) as file:
    numbers = json.load(file)

print(numbers)
```

```
>> [2, 3, 5, 7, 11, 13]
```

------



#### 8.4.2 保存和读取用户生成的数据

对于用户生成的数据，使用json保存会方便传输与读取，因为如果不以某种方式进行存储，等程序停止运行时用户的信息将丢失.

1. 把数据存储后打印.

```python
import json

username = input("What is you name? ")
filename = 'username.json'
with open(filename, 'w') as file:
    json.dump(username, file)
    print("We'll remember you when you come back, " + username + "!")
```

```
>> What is your name? Eric
>> We'll remember you when you come back, Eric!
```

------



2. 读取被存储的用户，并打印出来.

```python
import json

filename = 'username.json'

with open(filename) as file:
    username = json.load(file)
    print("welcome back, " + username + "!")
```

```
>> Welcome back, Eric!
```

------



3. 合并上面两个程序

```python
import json

filename = 'username.json'
try:
    with open(filename) as file:
        username = json.load(file)
except FileNotFoundError:
    username = input("What is your name? ")
    with open(filename, "w") as file:
        json.dump(username, file)
        print("We'll remember you when you come back, " + username + "!")
else:
    print("Welcome back, " + username + "!")
```

第一次运行结果：

```
>> What is your name? Eric
>> We'll remember you when you come back, Eric!
```

第二次运行结果：

```
>> Welcome back, Eric!
```

------



#### 8.4.3 重构

- 代码能够正常的运行，但可以做进一步的改进，即将代码划分为一系列完成具体工作的函数，这样的过程被称为重构；
- 重构让代码更清晰、更易于理解、更容易拓展.

```python
import json

def get_stored_username():
    filename = 'username.json'
    try:
        with open(filename) as file:
            username = json.load(file)
    except FileNotFoundError:
        return None
    else:
        return username
    
def greet_user():
    username = get_stored_username()
    if username:
        print("Welcome back, " + username + "!")
    else:
        username = input("what is your name?")
        filename = 'username.json'
        with open(filename, 'w') as file:
            json.dump(username, file)
            print("We'll remember you when you come back, " + username + "!")

greet_user()
```

代码重构之后：

```python
import json

def get_stored_username():
    filename = 'username.json'
    try:
        with open(filename) as file:
            username = json.load(file)
    except FileNotFoundError:
        return None
    else:
        return username
    
def get_new_username():
    username = input("What is you name? ")
    filename = 'username.json'
    with open(filename, 'w') as file:
        json.dump(username, file)
    return username

def greet_user():
    username = get_stored_username()
    if username:
        print("Welcome back, " + username + "!")
    else:
        username = get_new_username()
        print("We'll remember you when you come back, " + username + "!")

greet_user()
```

------



## 9. 测试代码

- 在编写函数或类时，还可以为其编写测试。通过测试，可以确定代码面对各种输入都能够按照要求的那样工作；
- 每一个开发者都会犯错误，因此每一个开发者都必须掌握测试代码的技能.

------



### 9.1 测试函数

```python
def get_formatted_name(first, last):
    full_name = first + ' ' + last
    return full_name.title()
```

```python
from name_function import get_formatted_name
print("Enter 'Q' at any time to quit.\nEnter 'K' at any time to keep going.")
while True:
    choose = input("Please, enter you choose: \n")
    if choose == 'K':
        first = input("\nPlease give me a first name: ")
        last = input("Please give me a last name: ")
        formatted_name = get_formatted_name(first, last)
        print("\tNeatly formatted name: " + formatted_name + '.')
    elif choose == 'Q':
        break
    else:
        print("Please re-enter your selection.")
        
```

```
>> Enter 'Q' at any time to quit.
>> Enter 'K' at any time to keep going.
>> 
>> Please, enter you choose: K
>> Please give me a first name: janis
>> Please give me a last name: joplin
>> 		Neatly formatted name: Janis Joplin.
>> 
>> Please, enter you choose: K
>> Please give me a first name: bob
>> Please give me a last name: dylan
>> 		Neatly formatted name: Bob Dylan.
>> 
>> Please, enter you choose: Q
```

- Python标准库中的模块unittest提供了代码测试工具；
- 单元测试用于核实函数的某个方面没有问题；
- 测试用例是一组单元测试，单元测试一起核实函数在各种情形下的行为都符合要求；
- 良好的测试用例考虑到了函数可能收到的各种输入，包含针对所有这些情形的测试；
- 全覆盖式测试用例包含一套单元测试，涵盖了各种可能的函数所有方法.

```python
import unittest
from name_function import get_formatted_name

class NamesTestCase(unittest.TestCase):
    def test_first_last_name(self):
        formatted_name = get_formatted_name('janis', 'joplin')
        self.assertEqual(formatted_name, 'Janis Joplin')

unittest.main()
```

------



### 9.2 测试类

描述了6个常用的断言方法，使用这些方法可以核实返回的值等于或不等于预期的值、返回的值为True或False、返回的值在列表中或不在列表中.

| 方法                    | 用途               |
| ----------------------- | ------------------ |
| assertEqual(a, b)       | 核实 a == b        |
| assertNotEqual(a, b)    | 核实 a != b        |
| assertTrue(x)           | 核实x为Ture        |
| assertFalse(x)          | 核实x为False       |
| assertIn(item, list)    | 核实item在list中   |
| assertNotIn(item, list) | 核实item不在list中 |

```python
# survey.py
class AnonymousSurvey():
    def __init__(self, question):
        self.question question
        self.reponses = []
    
    def show_question(self):
        print(self.question)
    
    def store_response(self, new_response):
        self.responses.append(new_response)
    
    def show_results(self):
        print("Survey results: ")
        for response in self.responses:
            print('- ' + response)
        
```

```python
from survey import AnonymousSurvey

question = "What language did you first learn to speak?"
my_survey = AnonymousSurvey(question)

my_survey.show_question()
print("Enter 'Q' at any time to quit.\n")
while True:
    response = input("Language: ")
    if response == 'Q':
        break
    my_survay.store_response(response)

print("\nThank you to everyone who participated in the survey!")
my_survay.show_results()
```

```
>> What language did you first learn to speak?
>> Enter 'Q' at any time to quit.
>> 
>> Language: English
>> Language: Spanish
>> Language: Mandarin
>> Language: Q
>>
>> Thank you to everyone who participated in the survey!
>> Survey results: 
>> - English
>> - Spanish
>> - Mandarin
```

------



**测试AnonymousSurvey类**

```python
import unittest
from survey import AnonymousSurvey

class TestAnonymousSurvey(unittest.TestCase):
    
    def test_store_three_responses(self):
        question = "What language did you first learn to speak?"
        my_survey = ['English', 'Spanish', 'Mandarin']
        for response in responses:
            my_survey.store_response(response)
        
        for response in responses:
            self.assertIn(response, my_survey.responses)

unittest.main()
```

- 利用方法setUp( )，来初始化测试参数；
- 创建一个调查对象，创建一个答案列表.

```python
import unittest
from survey import AnonymousSurvey

class TestAnonymousSurvey(unittest.TestCase):
    
    def setUp(self):
        question = "What language did you first learn to speak?"
        self.my_survey = AnonymousSurvey(question)
        self.responses = ['English', 'Spanish', 'Mandarin']
	
    def test_store_three_responses(self):
        for response in self.responses:
            my_survey.store_response(response)
        
        for response in self.responses:
            self.assertIn(response, my_survey.responses)

unittest.main()

```

运行测试用例时，每完成一个单元测试，Python都会打印一个字符：

- 测试通过时打印一个 ‘ . ’
- 测试引发错误时打印一个 ‘ E ’
- 测试导致断言失败时打印一个 ‘ F ’

------

