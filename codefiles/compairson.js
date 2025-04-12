'2'>1; // true as js converted '2' to number STRANGE!
'02'>1 // true same as above!


null > 0;   // false expected
null == 0   // false expected as null is different datatype
null >= 0   // true completely unexpected!! Reason comparasion operators work 
            // diffently then the equality operators in JS. Comparasion operators convert 
            // null to 0 hence we get true
