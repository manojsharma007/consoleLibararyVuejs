function changecolorconsole(option){
    let styles = [      
        , 'color: green'        
    ].join(';');
    
    console.log('%c'+option, styles);
    
}

changecolorconsole("abc")
//module.exports.changecolorconsole =changecolorconsole;