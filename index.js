var should=require('should');
var fs=require('fs');

/*

describe (moduleName, testDetails)
由上述代码可看出，describe是可以嵌套的，比如上述代码嵌套的两个describe就可以理解成测试人员希望测试Array模块下的#indexOf() 子模块。module_name 是可以随便取的，关键是要让人读明白就好。

it (info, function)
具体的测试语句会放在it的回调函数里，一般来说info字符串会写期望的正确输出的简要一句话文字说明。当该it block内的test failed的时候控制台就会把详细信息打印出来。一般是从最外层的describe的module_name开始输出（可以理解成沿着路径或者递归链或者回调链），最后输出info，表示该期望的info内容没有被满足。一个it对应一个实际的test case

assert.equal (exp1, exp2)
断言判断exp1结果是否等于exp2, 这里采取的等于判断是== 而并非 === 。即 assert.equal(1, ‘1’) 认为是True。这只是nodejs里的assert.js的一种断言形式，下文会提到同样比较常用的should.js。
*/
var name='hello';
describe('Name',function(){
it('the name should be hello',function(){
     name.should.eql('hello');
});
});

var person=function(name){
	this.name=name;
};

var obj=new person();
describe('instanceof',function(){
	it('obj should be an instance of person',function(){
		obj.should.be.an.instanceof(person);
	});
});

describe('readfile',function(){
	it('文件的内容应该是helloworld',function(done){
		fs.readFile('text.txt','utf8',function(err,data){
			data.should.eql('helloworld');
			done();//it里面只能调用一次done()
		});
	});
	
	it('文件的内容应该是hello',function(done){
		fs.readFile('text2.txt','utf8',function(err,data){
			data.should.eql('hello');
			done();
		});
	});
});

describe('待写测试主体',function(){
	it('这边是测试A，还没写',function(){
		
		
	});
});

should('abc').be.a.String();