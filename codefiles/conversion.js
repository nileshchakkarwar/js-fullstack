let var1 = "11";
let var2 = "11abc"; // notice that even if this is improper number still 
                    // JS doesn't throw any error.

console.table([Number(var1), Number(var2)]);
/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 11     │
│ 1       │ NaN    │
└─────────┴────────┘
*/

console.table([Boolean(""),Boolean("Nilesh"), Boolean(1),Boolean(0)]);
/*
┌──────────────────┬────────┐
│ (index)          │ Values │
├──────────────────┼────────┤
│ Boolean("")      │ false  │
│ Boolean("Nilesh")| true   │
│ Boolean(1)       │ true   │
│ Boolean(0)       │ false  │
*/