const mongoose = require('mongoose');
require('dotenv').config();

// Define Exercise Schema directly in seed file
const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  subcategory: String,
  difficulty: String,
  text: String,
  duration: Number,
  icon: String,
  order: Number,
  isActive: { type: Boolean, default: true }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

// Complete exercises data
const exercises = [
  // BASIC SECTION - Home Row
  {
    name: 'Home Row - Basic Pattern',
    description: 'Master the home row keys with extended practice',
    category: 'basic',
    subcategory: 'home_row',
    difficulty: 'easy',
    text: `asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl; 
    fdsa ;lkj fdsa ;lkj fdsa ;lkj fdsa ;lkj fdsa ;lkj fdsa ;lkj fdsa ;lkj fdsa ;lkj fdsa ;lkj fdsa ;lkj
    asdf fdsa jkl; ;lkj asdf jkl; fdsa ;lkj asdf fdsa jkl; ;lkj asdf jkl; fdsa ;lkj asdf fdsa jkl; ;lkj
    The home row keys are the foundation of touch typing. Place your left fingers on A S D F and right fingers on J K L semicolon. Practice moving between these keys smoothly without looking at the keyboard. Focus on maintaining proper finger placement and developing muscle memory. Repeat this pattern until your fingers automatically find the correct positions. Good typists always return their fingers to the home row as a resting position. This exercise will help you build the fundamental muscle memory needed for faster typing speeds.`,
    duration: 300,
    icon: '🏠',
    order: 1
  },
  {
    name: 'Home Row - Common Words',
    description: 'Practice real words using home row keys',
    category: 'basic',
    subcategory: 'home_row',
    difficulty: 'easy',
    text: `a sad dad fall ask lad glass flask glad salad sass jazz all add gas has had half ask fall salad glass flask jazz 
    a sad dad asked a lass for a glass of salad jazz. a flash flask falls and a glass lad laughs. 
    all a sad dad had a flash flask and a glass of salad. the jazz lad asks for a half glass of salad.
    The sad dad had a flash flask full of salad jazz. A glass lad asked for a half glass of salad. 
    All the jazz lads add gas to the flask. Practice these common words repeatedly to build speed and accuracy.`,
    duration: 300,
    icon: '🏠',
    order: 2
  },
  {
    name: 'Home Row - Sentences',
    description: 'Complex sentences with home row focus',
    category: 'basic',
    subcategory: 'home_row',
    difficulty: 'medium',
    text: `A sad lad asks a sad dad for a glass of salad jazz. A flash flask falls and a glass lad laughs. The sad dad has a flash flask full of salad. A jazz lad adds gas to a glass flask. All the sad lads have a glass of salad jazz. The flash flask falls and a sad dad asks for a half glass. A glass lad adds salad to a flash flask. The jazz lads laugh as a sad dad falls. A flash glass flask has a half glass of salad jazz. Practice these longer sentences to improve your endurance and maintain accuracy while typing for extended periods.`,
    duration: 360,
    icon: '🏠',
    order: 3
  },

  // BASIC SECTION - Top Row
  {
    name: 'Top Row - Basic Pattern',
    description: 'Master the top row keys QWERTYUIOP',
    category: 'basic',
    subcategory: 'top_row',
    difficulty: 'easy',
    text: `qwertyuiop qwertyuiop qwertyuiop qwertyuiop qwertyuiop qwertyuiop qwertyuiop qwertyuiop
    poiuytrewq poiuytrewq poiuytrewq poiuytrewq poiuytrewq poiuytrewq poiuytrewq poiuytrewq
    qaz wsx edc rfv tgv qaz wsx edc rfv tgv qaz wsx edc rfv tgv qaz wsx edc rfv tgv
    The top row contains the letters Q W E R T Y U I O P. Your left pinky should rest on Q, ring finger on W, middle finger on E, and index finger on R and T. Your right index finger should reach for Y, U, and I. Practice moving from the home row up to the top row and back down smoothly.`,
    duration: 300,
    icon: '⬆️',
    order: 4
  },
  {
    name: 'Top Row - Common Words',
    description: 'Practice common words using top row keys',
    category: 'basic',
    subcategory: 'top_row',
    difficulty: 'easy',
    text: `quit quiet quick quote quite quite quiet quote quick quit quiet quick quite quote quiet quick
    type your true prey tree pot tip top type your true prey tree pot tip top
    your quite quick quote requires a true typewriter to produce pretty poetry. quiet prayers require proper posture.
    The quick brown fox jumps over a pretty tree. Your true typewriter produces quiet poetry quite quickly.
    Practice typing these words repeatedly to build muscle memory for top row keys.`,
    duration: 300,
    icon: '⬆️',
    order: 5
  },

  // BASIC SECTION - Bottom Row
  {
    name: 'Bottom Row - Basic Pattern',
    description: 'Master bottom row keys ZXCVBNM',
    category: 'basic',
    subcategory: 'bottom_row',
    difficulty: 'easy',
    text: `zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm zxcvbnm
    mnbvcxz mnbvcxz mnbvcxz mnbvcxz mnbvcxz mnbvcxz mnbvcxz mnbvcxz mnbvcxz mnbvcxz
    zxc vbn mnb qaz zxc vbn mnb qaz zxc vbn mnb qaz zxc vbn mnb qaz
    The bottom row contains the letters Z X C V B N M. Your left pinky reaches down for Z, ring finger for X, middle finger for C, and index finger for V and B. Your right index finger reaches for N and your middle finger for M.`,
    duration: 300,
    icon: '⬇️',
    order: 6
  },
  {
    name: 'Bottom Row - Common Words',
    description: 'Practice words using bottom row keys',
    category: 'basic',
    subcategory: 'bottom_row',
    difficulty: 'easy',
    text: `zoo box cab very nice zoom vim max man ban van can zoo box cab very nice zoom vim max man ban van can
    zebra xray very nice box zoom vim max man ban van can zebra xray very nice box zoom vim max man
    my mom can buy a new van next month. the very nice box from the zoo contains a black zebra.
    The quick zebra runs very fast. My mom can buy a new van next month. Practice bottom row keys daily.`,
    duration: 300,
    icon: '⬇️',
    order: 7
  },

  // BASIC SECTION - Numbers
  {
    name: 'Numbers 0-9 Basic',
    description: 'Master number row keys',
    category: 'basic',
    subcategory: 'numbers',
    difficulty: 'easy',
    text: `1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890
    0987654321 0987654321 0987654321 0987654321 0987654321 0987654321 0987654321
    12345 67890 12345 67890 54321 09876 13579 24680 97531 86420
    The number row sits above the top row and contains the digits 1 through 0. Your left pinky reaches for 1, ring finger for 2, middle finger for 3, and index finger for 4, 5, and 6. Your right index finger reaches for 7, middle finger for 8, ring finger for 9, and pinky for 0.`,
    duration: 300,
    icon: '🔢',
    order: 8
  },
  {
    name: 'Number Sequences',
    description: 'Practice common number patterns',
    category: 'basic',
    subcategory: 'numbers',
    difficulty: 'medium',
    text: `1234567890 9876543210 1357924680 2468135790 123454321 987656789 111222333444555
    12345 67890 12345 67890 54321 09876 13579 24680 97531 86420 1234567890 9876543210
    111 222 333 444 555 666 777 888 999 000 111 222 333 444 555 666 777 888 999 000
    Practice these number sequences to build speed and accuracy with numeric data entry. These patterns are common in real-world typing scenarios.`,
    duration: 360,
    icon: '🔢',
    order: 9
  },

  // SPECIAL SECTION - Speed Drills
  {
    name: 'Speed Drill - Pangram',
    description: 'Build speed with famous pangrams',
    category: 'special',
    subcategory: 'speed',
    difficulty: 'hard',
    text: `the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog 
    the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
    the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog
    This famous pangram contains every letter of the alphabet. Repeating it many times helps build muscle memory for all letter combinations. Focus on maintaining a consistent rhythm and increasing your speed gradually.`,
    duration: 300,
    icon: '⚡',
    order: 10
  },
  {
    name: 'Speed Drill - Common Phrases',
    description: 'Rapid typing of common English phrases',
    category: 'special',
    subcategory: 'speed',
    difficulty: 'hard',
    text: `thank you very much for your prompt response and thorough attention to this matter i greatly appreciate your assistance
    please let me know if there is anything else i can do to help move this process forward as quickly as possible
    i am writing to follow up on our previous conversation regarding the project timeline and deliverables
    thank you for your understanding and patience as we work through these challenges together
    Practice typing these common business phrases quickly and accurately. These phrases appear frequently in professional emails.`,
    duration: 360,
    icon: '⚡',
    order: 11
  },

  // SPECIAL SECTION - Programming
  {
    name: 'JavaScript Basics',
    description: 'Practice common JS syntax patterns',
    category: 'special',
    subcategory: 'programming',
    difficulty: 'advanced',
    text: `function calculateTotal(itemPrice, quantity, taxRate) { 
      const subtotal = itemPrice * quantity; 
      const tax = subtotal * (taxRate / 100); 
      const total = subtotal + tax; 
      return Math.round(total * 100) / 100; 
    }
    const shoppingCart = {
      items: [],
      addItem: function(item, price, quantity) {
        this.items.push({ name: item, price: price, quantity: quantity });
        return this.items.length;
      }
    };`,
    duration: 360,
    icon: '💻',
    order: 12
  },

  // SPECIAL SECTION - Symbols
  {
    name: 'All Symbols Practice',
    description: 'Master all keyboard symbols',
    category: 'special',
    subcategory: 'symbols',
    difficulty: 'hard',
    text: `! @ # $ % ^ & * ( ) - _ = + [ ] { } \\ | ; : ' " , . < > / ? ~ \` 
    ! @ # $ % ^ & * ( ) _ + { } [ ] : ; " ' < > , . ? / | \\
    (parentheses) [brackets] {braces} <angles> |pipe| \\backslash /forward-slash
    The symbol row contains many important characters used in programming and mathematics. Each symbol has a specific purpose and requires precise finger placement.`,
    duration: 300,
    icon: '✨',
    order: 13
  },

  // SPECIAL SECTION - Quotes
  {
    name: 'Famous Quotes',
    description: 'Type inspiring quotes from history',
    category: 'special',
    subcategory: 'quotes',
    difficulty: 'medium',
    text: `"The only limit to our realization of tomorrow is our doubts of today." - Franklin D. Roosevelt
    "Success is not final, failure is not fatal: it is the courage to continue that counts." - Winston Churchill
    "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt
    "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that." - Martin Luther King Jr.
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do." - Mark Twain`,
    duration: 420,
    icon: '💬',
    order: 14
  },

  // PRACTICE SECTION - Easy (10 exercises)
  ...Array(10).fill(null).map((_, i) => ({
    name: `Easy Practice ${i + 1}`,
    description: `Comprehensive practice exercise ${i + 1} for building typing foundation`,
    category: 'practice',
    subcategory: 'easy',
    difficulty: 'easy',
    text: `This is practice exercise number ${i + 1} in the comprehensive typing practice series. The purpose of this extended text is to help you build typing endurance while maintaining accuracy. Focus on keeping your fingers on the home row and using the correct finger for each key. Pay attention to your posture and try to maintain a steady rhythm as you type through this passage.
    
    As you type, notice which words or letter combinations slow you down. Common challenges include transitioning between different rows, typing punctuation marks, and maintaining speed on longer words. Try to look ahead at the text rather than focusing on the word you are currently typing. This technique, known as previewing, helps improve your typing speed significantly over time.
    
    Remember that accuracy is more important than speed when building fundamental skills. It is better to type slowly and correctly than to type quickly with many errors. Each time you make a mistake, take a moment to understand why it happened. With consistent practice, you will develop muscle memory that makes correct finger placement automatic. This exercise provides the extended practice needed to develop that consistency.`,
    duration: 420,
    icon: '📝',
    order: 20 + i
  })),

  // PRACTICE SECTION - Medium (10 exercises)
  ...Array(10).fill(null).map((_, i) => ({
    name: `Medium Practice ${i + 1}`,
    description: `Intermediate practice exercise ${i + 1} for improving typing rhythm`,
    category: 'practice',
    subcategory: 'medium',
    difficulty: 'medium',
    text: `Welcome to medium practice exercise number ${i + 1}. This level introduces more complex sentence structures, varied vocabulary, and longer paragraphs to challenge your developing typing skills. At this stage, you should be comfortable with basic finger placement and ready to focus on increasing your speed while maintaining good accuracy.
    
    One of the key skills you will develop is the ability to maintain a steady typing rhythm even when encountering unfamiliar words or complex letter combinations. Professional typists develop what is often called "flow state" - a mental condition where typing becomes almost automatic. This flow state is achieved through extensive practice with varied content that gradually increases in difficulty.
    
    The content includes more sophisticated vocabulary and grammatical structures. You will encounter longer words with more syllables, more complex sentence structures including subordinate clauses, and a wider variety of punctuation usage. These elements more closely resemble the type of content you might encounter in professional writing or technical documentation.`,
    duration: 480,
    icon: '📝',
    order: 40 + i
  })),

  // PRACTICE SECTION - Hard (10 exercises)
  ...Array(10).fill(null).map((_, i) => ({
    name: `Hard Practice ${i + 1}`,
    description: `Advanced practice exercise ${i + 1} for speed and endurance`,
    category: 'practice',
    subcategory: 'hard',
    difficulty: 'hard',
    text: `This is hard practice exercise number ${i + 1} in the advanced practice section. At this level, you should already have solid fundamental typing skills and be ready to focus intensively on speed development while maintaining high accuracy. These exercises feature complex vocabulary, technical terminology, and sophisticated sentence structures designed to challenge even experienced typists.
    
    One of the primary goals is to help you develop the ability to type quickly while maintaining comprehension of the material you are typing. Professional typists often need to type content they are simultaneously reading and understanding, which requires a different cognitive approach than simply copying text without comprehension.
    
    The technical vocabulary includes terms from fields such as technology, science, business, and medicine. This diversity ensures that you build familiarity with terminology you might encounter in various professional contexts. The ability to type technical terms quickly and accurately is particularly valuable in fields such as legal transcription, medical reporting, and software development.
    
    Pay special attention to punctuation usage in these advanced exercises. Correct punctuation is essential for clear communication, and professional typing requires mastery of all punctuation marks including commas, periods, semicolons, colons, quotation marks, parentheses, and brackets.`,
    duration: 540,
    icon: '🎯',
    order: 60 + i
  }))
];

async function seedExercises() {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/nextype';
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Clear existing exercises
    const deleted = await Exercise.deleteMany({});
    console.log(`🗑️  Cleared ${deleted.deletedCount} existing exercises`);

    // Insert new exercises
    const result = await Exercise.insertMany(exercises);
    console.log(`✅ Successfully seeded ${result.length} exercises`);
    console.log(`   - Basic exercises: 9`);
    console.log(`   - Special exercises: 6`);
    console.log(`   - Practice exercises: 30`);
    console.log(`   TOTAL: ${result.length} exercises`);

    // Log categories
    const categories = await Exercise.aggregate([
      { $group: { _id: '$subcategory', count: { $sum: 1 } } }
    ]);
    console.log('\n📊 Exercises by category:');
    categories.forEach(cat => {
      console.log(`   - ${cat._id}: ${cat.count} exercises`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding exercises:', error);
    process.exit(1);
  }
}

seedExercises();