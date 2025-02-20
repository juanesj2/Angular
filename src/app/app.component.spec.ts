export class ParentComponent {
    currentProgress = 50;
   
    increaseProgress() {
      if (this.currentProgress < 100) {
        this.currentProgress += 10;
      }
    }
   }