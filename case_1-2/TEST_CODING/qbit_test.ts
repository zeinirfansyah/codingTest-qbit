type IFruit = {
  fruitId: number,
  fruitName: string,
  fruitType: 'IMPORT' | 'LOCAL',
  stock: number
}
    
const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk Bali',
    fruitType: 'LOCAL',
    stock: 10
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150
  }
]


type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
  }

const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa'
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa'
          }
        ]
      }
    ]
  },
  {
    commentId: 2,
    commentContent: 'Halooo'
  },
]
  


function getFruits() {
    const fruitNames = fruits.map(fruit => fruit.fruitName);
    console.log("CASE 1\n ======================")
    console.log(`1. Buah yang dimiliki Andi: ${[...new Set(fruitNames)].join(', ')}`);
  
    const fruitTypes = [...new Set(fruits.map(fruit => fruit.fruitType))];
    console.log(`2. Jumlah wadah: ${fruitTypes.length}`);
    fruitTypes.forEach(fruitType => {
      const fruitsByType = fruits.filter(fruit => fruit.fruitType === fruitType);
      const fruitNamesByType = [...new Set(fruitsByType.map(fruit => fruit.fruitName))];
      console.log(`   - ${fruitType}: ${fruitNamesByType.join(', ')}`);
    });
  
    console.log('3. Total stock buah di masing-masing wadah:');
    fruitTypes.forEach(fruitType => {
      const fruitsByType = fruits.filter(fruit => fruit.fruitType === fruitType);
      const totalStock = fruitsByType.reduce((acc, fruit) => acc + fruit.stock, 0);
      console.log(`   - ${fruitType}: ${totalStock}`);
    });
  
    console.log('4. Tidak ada komentar terkait kasus di atas.\n\n');
  }
  
  function hitungKomentar(){
    let count = 0;
    comments.forEach(comment => {
      count++;
      if(comment.replies){
        comment.replies.forEach(reply => {
          count++;
          if(reply.replies){
            reply.replies.forEach(reply2 => {
              count++;
            })
          }
        })
      }
    })
    console.log("CASE 2\n ======================")
    console.log(`5. Jumlah komentar: ${count}\n\n`);
  }

getFruits();
hitungKomentar();