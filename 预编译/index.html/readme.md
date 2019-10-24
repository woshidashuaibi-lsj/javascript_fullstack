# 预编译 预编译四部曲 发生在函数执行之前
1.创建一个AO对象
2.找形参和变量声明，将变量声明和形参作为AO属性名，值为undefined
3.将实参值和形参值统一
4.在函数体里找函数声明，将函数名作为AO对象的属性名，值赋予函数体

1//AO{
2//a:undefined
   b:undefined
3//a:1
   b:undefined
4//d:function (){}
   a:function(){}
}
# 预编译也发生在全局
1.创建一个GO对象
2.找形参和变量声明，将变量声明和形参作为GO属性名，值为undefined
3.在函数体里找函数声明，将函数名作为GO对象的属性名，值赋予函数体
GO{

}
GO==window