const pairs={
    'A':'T',
    'T':'A',
    'C':'G',
    'G':'C'
  };
  
  function DNAStrand(dna){
    return dna.split('').map(function(l){return pairs[l] }).join('');
  }
  
  