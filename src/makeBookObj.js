function makeBookObj(author, title, numberOfChapters, isRead){

    let makeBookProto = {
      changeBookStatus: function() {
        if(this.isRead === 'Reading') {
          this.isRead = 'Completed';
          return this.isRead;
        } else if(this.isRead === 'Completed'){
          this.isRead = 'Not Read Yet';
          return this.isRead;
        } else if(this.isRead === 'Not Read Yet'){
          this.isRead = 'Reading';
          return this.isRead;
        }
      }
    }
  
    let obj = Object.create(makeBookProto);
    obj.author = author;
    obj.title = title;
    obj.numberOfChapters = numberOfChapters;
    obj.isRead = isRead;
    console.log(obj);
    
    return obj;
}

export default makeBookObj;