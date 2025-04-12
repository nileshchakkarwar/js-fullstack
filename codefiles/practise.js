function func1(){
    let a = 1;
    function func2(){
        let b = 2;
    }
    func2();
    console.log(b);
}
func1();