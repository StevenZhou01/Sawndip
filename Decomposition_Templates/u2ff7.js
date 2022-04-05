let chr71 = {
  character: "匚",
  strokes: [
    "M 315 653 Q 357 635 406 643 Q 560 665 720 687 Q 793 699 804 708 Q 814 717 811 726 Q 804 741 771 751 Q 741 758 634 731 Q 468 695 310 689 Q 309 689 309 688 C 279 685 287 663 315 653 Z",
    "M 309 688 L 309 689 Q 263 714 242 716 Q 229 717 220 710 Q 210 703 224 685 Q 246 655 245 383 Q 242 149 205 73 Q 199 67 195 62 Q 173 43 186 24 Q 193 6 209 -7 Q 225 -20 245 -6 Q 252 3 318 26 Q 414 47 595 52 Q 779 55 844 46 Q 869 42 883 49 Q 895 55 895 63 Q 894 79 858 102 Q 822 123 801 122 Q 758 121 425 82 Q 298 61 288 75 Q 279 84 290 226 Q 284 257 306 546 Q 309 628 315 653 C 319 683 319 683 309 688 Z",
  ],
};

let chr72 = {
  character: "北",
  strokes: [
    "M 343 159 Q 343 147 361 108 Q 368 92 375 89 Q 381 83 388 90 Q 395 94 405 115 Q 408 124 412 224 Q 406 578 426 645 Q 433 660 431 672 Q 424 682 371 713 Q 349 729 330 714 Q 326 710 331 694 Q 352 666 358 585 Q 361 522 361 466 L 361 426 Q 361 249 344 197 L 343 159 Z",
    "M 361 466 Q 345 470 331 466 Q 208 436 163 431 Q 150 430 148 421 Q 145 411 161 400 Q 200 375 241 390 Q 302 415 361 426 C 390 432 390 460 361 466 Z",
    "M 344 197 Q 263 173 169 148 Q 154 144 129 145 Q 116 144 113 131 Q 112 116 122 108 Q 147 90 185 70 Q 197 67 210 77 Q 244 108 343 159 C 370 173 373 205 344 197 Z",
    "M 597 384 Q 772 472 828 489 Q 837 492 848 494 Q 876 501 867 524 Q 857 546 829 570 Q 804 592 788 592 Q 773 593 775 576 Q 772 534 680 471 Q 640 443 598 411 C 574 393 570 371 597 384 Z",
    "M 942 82 Q 961 100 940 135 Q 916 198 908 279 Q 908 291 899 300 Q 887 306 884 280 Q 877 250 867 201 Q 860 153 846 134 Q 840 121 815 116 Q 776 106 722 110 Q 682 111 656 122 Q 619 137 607 181 Q 595 220 597 384 L 598 411 Q 598 570 626 682 Q 632 712 638 719 Q 648 744 627 759 Q 596 787 554 797 Q 533 801 524 792 Q 515 782 523 771 Q 548 750 549 671 Q 534 262 555 169 Q 570 114 611 82 Q 680 31 846 44 Q 862 47 878 50 Q 923 63 942 82 Z",
  ],
};

function setup() {
  createCanvas(500, 500);
  background(255);
  rectMode(CENTER);
  rect(width / 2, height / 2, 300, 300);
  line(width / 2, height / 2 - 300 / 2, width / 2, height / 2 + 300 / 2);
  line(width / 2 - 300 / 2, height / 2, width / 2 + 300 / 2, height / 2);
  translate(100, 370);

  push();
  translate(-20, 10);
  scale(0.33, -0.33);
  let ctx71 = drawingContext;
  ctx71.fillStyle = "black";
  ctx71.strokeStyle = "black";
  for (let j = 0; j < chr71.strokes.length; j++) {
    p = new Path2D(chr71.strokes[j]);
    ctx71.fill(p);
  }
  translate(280, 140);
  scale(0.6, 0.6);
  let ctx72 = drawingContext;
  ctx72.fillStyle = "black";
  ctx72.strokeStyle = "black";
  for (let j = 0; j < chr72.strokes.length; j++) {
    p = new Path2D(chr72.strokes[j]);
    ctx72.fill(p);
  }
  pop();
}