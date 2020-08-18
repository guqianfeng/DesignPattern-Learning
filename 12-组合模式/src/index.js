class Folder {
  constructor (name) {
    this.name = name;
    this.files = [];
    this.parent = null;
  }
  add (file) {
    this.files.push(file);
    file.parent = this;
  }
  remove () {
    if (!this.parent) {
      return;
    }
    for (let i = this.parent.files.length - 1; i >= 0; i--) {
      let file = this.parent.files[i];
      if (file === this) {
        this.parent.files.splice(i, 1);
        break;
      }
    }
  }
  scan () {
    console.log("开始扫描文件夹", this.name);
    for (let i = 0; i < this.files.length; i++) {
      this.files[i].scan();
    }
  }
}

class File {  
  constructor (name) {
    this.name = name;
    this.parent = null;
  }
  add () {
    throw new Error("文件不能添加文件");
  }
  scan () {
    console.log("开始扫描文件", this.name);
  }
  remove () {
    if (!this.parent) {
      return;
    }
    for (let i = this.parent.files.length - 1; i >= 0; i--) {
      let file = this.parent.files[i];
      if (file === this) {
        this.parent.files.splice(i, 1);
        break;
      }
    }
  }
}

let folder = new Folder("最大的文件夹")
let folder1 = new Folder('文件夹1')
let folder2 = new Folder('文件夹2')
let folder3 = new Folder('文件夹3')
let file1 = new File('文件1')
let file2 = new File('文件2')
let file3 = new File('文件3')
let file4 = new File('文件4')
folder.add(folder1)
folder.add(folder2)
folder.add(folder3)
folder1.add(file1)
folder2.add(file2)
folder3.add(file3)
folder.add(file4)
folder.scan();

console.log('-------------------------')
folder1.remove();
file3.remove();
folder.scan();