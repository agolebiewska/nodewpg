function getLongerText(text1, text2) {
    
    if (text1.length > text2.length) {
       console.log(text1);

    } else if (text1.length < text2.length) {
        console.log(text2);  

    } else { 
        console.log(`Text lenght are the same`)
    }
}

getLongerText('book', 'dog');
getLongerText('notebook','ereader');
getLongerText('cat', 'ladybird');
getLongerText ('cat', 'dog');