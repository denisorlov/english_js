// словарь изучаемых слов
var learning_dict = {},
//  словарь изученых слов
learned_dict = {
    "if": {},
    "you": {},
    "search": {},
    "for": {},
    "it": {},
    "isn't": {},
    "hard": {},
    "to": {},
    "find": {},
    "can": {},
    "the": {},
    "love": {},
    "need": {},
    "live": {},
    "look": {},
    "might": {},
    "just": {},
    "as": {},
    "be": {},
    "blind": {},
    "always": {},
    "seems": {},
    "so": {},
    "give": {},
    "chorus": {},
    "is": {},
    "such": {},
    "a": {},
    "lonely": {},
    "word": {},
    "everyone": {},
    "hardly": {},
    "ever": {},
    "heard": {},
    "and": {},
    "mostly": {},
    "what": {},
    "i": {},
    "from": {},
    "someone": {},
    "say": {},
    "they": {},
    "my": {},
    "heart": {},
    "out": {},
    "on": {},
    "sleeve": {},
    "don't": {},
    "want": {},
    "some": {},
    "pretty": {},
    "face": {},
    "tell": {},
    "me": {},
    "all": {},
    "believe": {},
    "lover": {},
    "friend": {},
    "security": {},
    "until": {},
    "bitter": {},
    "end": {},
    "anyone": {},
    "comfort": {},
    "with": {},
    "promises": {},
    "again": {},
    "know": {},
    "when": {},
    "deep": {},
    "inside": {},
    "of": {},
    "too": {},
    "won't": {},
    "ask": {},
    "nothin'": {},
    "while": {},
    "gone": {},
    "where": {},
    "else": {},
    "turn": {},
    "because": {},
    "you're": {},
    "one": {},
    "that": {},
    "depend": {},
    "upon": {},
    "have": {},
    "but": {},
    "well": {},
    "i'm": {},


    "lie": {},
    "cold": {},
    "began": {},
    "start": {},
    "not": {},
    "will": {},
    "question": {},
    "i've": {},
    "long": {},
    "enough": {},
    "learn": {},
    "closer": {},
    "get": {},
    "fire": {},
    "more": {},
    "burn": {},
    "happen": {},
    "us": {},
    "cause": {},
    "an": {},
    "girl": {},
    "lot": {},
    "lose": {},
    "faith": {},
    "in": {},
    "this": {},
    "world": {},
    "gonna": {},
    "moment": {},
    "truth": {},
    "afraid": {},
    "another": {},
    "belief": {},
    "break": {},
    "must": {},
    "go": {},
    "distance": {},
    "resistance": {},
    "doubts": {},
    "god's": {},
    "shut": {},
    "time": {},
    "": {},
    "got": {},
    "nothing": {},
    "take": {},
    "leave": {},
    "whatever": {},
    "hold": {},
    "back": {},
    "anything": {},
    "i'll": {},
    "walk": {},
    "away": {},
    "fool": {},
    "or": {},
    "king": {},
    "mind": {},
    "make": {},
    "adjust": {},
    "never": {},
    "was": {},
    "instrumental": {},
    "interlude": {},
    "sure": {},
    "aware": {},
    "we've": {},
    "both": {},
    "had": {},
    "our": {},
    "share": {},
    "believing": {},
    "whole": {},
    "situation": {},
    "wrong": {},
    "constant": {},
    "battle": {},
    "ultimate": {},
    "state": {},
    "control": {},
    "after": {},
    "why": {},
    "it's": {},
    "lived": {},
    "been": {},
    "took": {},
    "your": {},
    "can't": {},
    "only": {},
    "then": {},
    "soul": {},
    "there": {},

    'isn\'t': {
    },
    'don\'t': {
    },
    'won\'t': {
    },
    'nothin\'': {
    },
    'you\'re': {
    },
    'i\'m': {
    },
    'i\'ve': {
    },
    'god\'s': {
    },
    'i\'ll': {
    },
    'we\'ve': {
    },
    'it\'s': {
    },
    'can\'t': {
    },
    'he': {
    },
    'his': {
    },
    'do': {
    },
    'she': {
    },
    'at': {
    },
    'her': {
    },
    'are': {
    },
    'we': {
    },
    'him': {
    },
    'up': {
    },
    'no': {
    },
    'see': {
    },
    'like': {
    },
    'were': {
    },
    'come': {
    },
    'think': {
    },
    'down': {
    },
    'would': {
    },
    'about': {
    },
    'man': {
    },
    'by': {
    },
    'am': {
    },
    'now': {
    },
    'over': {
    },
    'hand': {
    },
    'who': {
    },
    'here': {
    },
    'off': {
    },
    'right': {
    },
    'two': {
    },
    'through': {
    },
    'eye': {
    },
    'head': {
    },
    'other': {
    },
    'how': {
    },
    'around': {
    },
    'door': {
    },
    'room': {
    },
    'day': {
    },
    'way': {
    },
    'night': {
    },
    'thing': {
    },
    'open': {
    },
    'something': {
    },
    'move': {
    },
    'stand': {
    },
    'little': {
    },
    'try': {
    },
    'still': {
    },
    'hear': {
    },
    'before': {
    },
    'sit': {
    },
    'let': {
    },
    'call': {
    },
    'feel': {
    },
    'close': {
    },
    'very': {
    },
    'which': {
    },
    'car': {
    },
    'any': {
    },
    'work': {
    },
    'run': {
    },
    'even': {
    },
    'light': {
    },
    'than': {
    },
    'put': {
    },
    'yes': {
    },
    'stop': {
    },
    'old': {
    },
    'watch': {
    },
    'first': {
    },
    'may': {
    },
    'talk': {
    },
    'cut': {
    },
    'pull': {
    },
    'behind': {
    },
    'smile': {
    },
    'toward': {
    },
    's': {
    },
    'much': {
    },
    'its': {
    },
    'house': {
    },
    'keep': {
    },
    'place': {
    },
    'begin': {
    },
    'year': {
    },
    'woman': {
    },
    'side': {
    },
    'three': {
    },
    'seem': {
    },
    'wait': {
    },
    'himself': {
    },
    'stare': {
    },
    'arm': {
    },
    'use': {
    },
    'voice': {
    },
    'last': {
    },
    'late': {
    },
    'across': {
    },
    'front': {
    },
    'sound': {
    },
    'big': {
    },
    'really': {
    },
    'name': {
    },
    'should': {
    },
    'new': {
    },
    'guy': {
    },
    'kill': {
    },
    'point': {
    },
    'small': {
    },
    'wall': {
    },
    'black': {
    },
    'step': {
    },
    'window': {
    },
    'life': {
    },
    'maybe': {
    },
    'fall': {
    },
    'own': {
    },
    'far': {
    },
    'under': {
    },
    'boy': {
    },
    'those': {
    },
    'reach': {
    },
    'floor': {
    },
    'street': {
    },
    'help': {
    },
    'next': {
    },
    'few': {
    },
    'white': {
    },
    'feet': {
    },
    'table': {
    },
    'show': {
    },
    'okay': {
    },
    'ok': {
    },
    'phone': {
    },
    'body': {
    },
    'same': {
    },
    'minute': {
    },
    'shake': {
    },
    'water': {
    },
    'follow': {
    },
    'second': {
    },
    'nod': {
    },
    'great': {
    },
    'yeah': {
    },
    'each': {
    },
    'suddenly': {
    },
    'dead': {
    },
    'almost': {
    },
    'gun': {
    },
    'speak': {
    },
    'pick': {
    },
    'home': {
    },
    'without': {
    },
    'win': {
    },
    'better': {
    },
    'god': {
    },
    'build': {
    },
    'course': {
    },
    'drive': {
    },
    'bring': {
    },
    'along': {
    },
    'five': {
    },
    'air': {
    },
    'continue': {
    },
    'most': {
    },
    'pass': {
    },
    'kid': {
    },
    'half': {
    },
    'line': {
    },
    'high': {
    },
    'set': {
    },
    'read': {
    },
    'hour': {
    },
    'office': {
    },
    'play': {
    },
    'answer': {
    },
    'shoot': {
    },
    'dark': {
    },
    'laugh': {
    },
    'bed': {
    },
    'thank': {
    },
    'remember': {
    },
    'drop': {
    },
    'though': {
    },
    'glass': {
    },
    'hair': {
    },
    'hell': {
    },
    'catch': {
    },
    'mother': {
    },
    'four': {
    },
    'listen': {
    },
    'understand': {
    },
    'sir': {
    },
    'between': {
    },
    'money': {
    },
    'father': {
    },
    'morning': {
    },
    'red': {
    },
    'please': {
    },
    'everything': {
    },
    'slowly': {
    },
    'rise': {
    },
    'die': {
    },
    'kind': {
    },
    'wear': {
    },
    'hit': {
    },
    'hang': {
    },
    'many': {
    },
    'drink': {
    },
    'stay': {
    },
    'shoulder': {
    },
    'past': {
    },
    'grab': {
    },
    'part': {
    },
    'case': {
    },
    'mouth': {
    },
    'throw': {
    },
    'enter': {
    },
    'hundred': {
    },
    'cover': {
    },
    'blood': {
    },
    'check': {
    },
    'outside': {
    },
    'large': {
    },
    'change': {
    },
    'push': {
    },
    'sorry': {
    },
    'bad': {
    },
    'top': {
    },
    'chair': {
    },
    'finger': {
    },
    'lead': {
    },
    'scream': {
    },
    'ground': {
    },
    'already': {
    },
    'forward': {
    },
    'figure': {
    },
    'touch': {
    },
    'become': {
    },
    'yet': {
    },
    'also': {
    },
    'desk': {
    },
    'clear': {
    },
    'real': {
    },
    'carry': {
    },
    'sleep': {
    },
    'glance': {
    },
    'seat': {
    },
    'matter': {
    },
    'number': {
    },
    'ship': {
    },
    'full': {
    },
    'police': {
    },
    'twenty': {
    },
    'send': {
    },
    'together': {
    },
    'ten': {
    },
    'roll': {
    },
    'return': {
    },
    'near': {
    },
    'miss': {
    },
    'pay': {
    },
    'paper': {
    },
    'rest': {
    },
    'appear': {
    },
    'park': {
    },
    'above': {
    },
    'fly': {
    },
    'pause': {
    },
    'road': {
    },
    'probably': {
    },
    'finally': {
    },
    'guard': {
    },
    'draw': {
    },
    'city': {
    },
    'job': {
    },
    'ring': {
    },
    'fight': {
    },
    'leg': {
    },
    'wonder': {
    },
    'lean': {
    },
    'since': {
    },
    'hope': {
    },
    'left': {
    },
    'sign': {
    },
    'cross': {
    },
    'suppose': {
    },
    'order': {
    },
    'eat': {
    },
    'corner': {
    },
    'tear': {
    },
    'shit': {
    },
    'six': {
    },
    'fast': {
    },
    'bill': {
    },
    'quickly': {
    },
    'shadow': {
    },
    'wife': {
    },
    'dress': {
    },
    'damn': {
    },
    'guess': {
    },
    'myself': {
    },
    'care': {
    },
    'raise': {
    },
    'mile': {
    },
    'land': {
    },
    'perhaps': {
    },
    'bar': {
    },
    'blue': {
    },
    'idea': {
    },
    'death': {
    },
    'alone': {
    },
    'dad': {
    },
    'daddy': {
    },
    'tree': {
    },
    'fill': {
    },
    'crowd': {
    },
    'business': {
    },
    'blow': {
    },
    'cry': {
    },
    'write': {
    },
    'notice': {
    },
    'fine': {
    },
    'quite': {
    },
    'power': {
    },
    'fact': {
    },
    'week': {
    },
    'nice': {
    },
    'lock': {
    },
    'story': {
    },
    'dog': {
    },
    'least': {
    },
    'empty': {
    },
    'wave': {
    },
    'several': {
    },
    'silence': {
    },
    'short': {
    },
    'problem': {
    },
    'fucking': {
    },
    'cop': {
    },
    'thousand': {
    },
    'approach': {
    },
    'realize': {
    },
    'rock': {
    },
    'piece': {
    },
    'wind': {
    },
    'box': {
    },
    'either': {
    },
    'kiss': {
    },
    'edge': {
    },
    'interest': {
    },
    'surprise': {
    },
    'bit': {
    },
    'forget': {
    },
    'stick': {
    },
    'finish': {
    },
    'fuck': {
    },
    'grow': {
    },
    'ago': {
    },
    'bag': {
    },
    'sense': {
    },
    'picture': {
    },
    'ready': {
    },
    'chance': {
    },
    'worry': {
    },
    'ahead': {
    },
    'couple': {
    },
    'press': {
    },
    'doctor': {
    },
    'book': {
    },
    'officer': {
    },
    'son': {
    },
    'pocket': {
    },
    'human': {
    },
    'family': {
    },
    'safe': {
    },
    'breath': {
    },
    'early': {
    },
    'jump': {
    },
    'lift': {
    },
    'green': {
    },
    'reason': {
    },
    'lay': {
    },
    'free': {
    },
    'machine': {
    },
    'beside': {
    },
    'stuff': {
    },
    'wide': {
    },
    'round': {
    },
    'expect': {
    },
    'neck': {
    },
    'careful': {
    },
    'lip': {
    },
    'school': {
    },
    'hide': {
    },
    'deal': {
    },
    'whisper': {
    },
    'space': {
    },
    'herself': {
    },
    'baby': {
    },
    'climb': {
    },
    'easy': {
    },
    'plan': {
    },
    'yourself': {
    },
    'trouble': {
    },
    'slide': {
    },
    'thirty': {
    },
    'train': {
    },
    'low': {
    },
    'key': {
    },
    'different': {
    },
    'swing': {
    },
    'coffee': {
    },
    'radio': {
    },
    'hotel': {
    },
    'anyway': {
    },
    'shout': {
    },
    'study': {
    },
    'foot': {
    },
    'slow': {
    },
    'station': {
    },
    'brother': {
    },
    'hurt': {
    },
    'game': {
    },
    'heavy': {
    },
    'lady': {
    },
    'below': {
    },
    'kitchen': {
    },
    'buy': {
    },
    'area': {
    },
    'knock': {
    },
    'star': {
    },
    'decide': {
    },
    'view': {
    },
    'flash': {
    },
    'sun': {
    },
    'month': {
    },
    'straight': {
    },
    'truck': {
    },
    'shirt': {
    },
    'remain': {
    },
    'sky': {
    },
    'suit': {
    },
    'hot': {
    },
    'boat': {
    },
    'ride': {
    },
    'fear': {
    },
    'pain': {
    },
    'sight': {
    },
    'wish': {
    },
    'slip': {
    },
    'hall': {
    },
    'actually': {
    },
    'group': {
    },
    'race': {
    },
    'dollar': {
    },
    'true': {
    },
    'children': {
    },
    'shot': {
    },
    'except': {
    },
    'grin': {
    },
    'exactly': {
    },
    'mark': {
    },
    'stone': {
    },
    'computer': {
    },
    'huge': {
    },
    'less': {
    },
    'explain': {
    },
    'spot': {
    },
    'reply': {
    },
    'clean': {
    },
    'centre': {
    },
    'center': {
    },
    'corridor': {
    },
    'chest': {
    },
    'ear': {
    },
    'report': {
    },
    'dream': {
    },
    'living': {
    },
    'middle': {
    },
    'wheel': {
    },
    'bottle': {
    },
    'somebody': {
    },
    'able': {
    },
    'movie': {
    },
    'driver': {
    },
    'happy': {
    },
    'murder': {
    },
    'rather': {
    },
    'offer': {
    },
    'quiet': {
    },
    'rush': {
    },
    'rain': {
    },
    'today': {
    },
    'freeze': {
    },
    'bank': {
    },
    'bedroom': {
    },
    'kick': {
    },
    'field': {
    },
    'beautiful': {
    },
    'stair': {
    },
    'angle': {
    },
    'darkness': {
    },
    'card': {
    },
    'person': {
    },
    'nobody': {
    },
    'hole': {
    },
    'earth': {
    },
    'gray': {
    },
    'grey': {
    },
    'snap': {
    },
    'war': {
    },
    'music': {
    },
    'skin': {
    },
    'sea': {
    },
    'cigarette': {
    },
    'lower': {
    },
    'attention': {
    },
    'direction': {
    },
    'ice': {
    },
    'knee': {
    },
    'company': {
    },
    'eight': {
    },
    'block': {
    },
    'save': {
    },
    'smell': {
    },
    'track': {
    },
    'weapon': {
    },
    'horse': {
    },
    'apartment': {
    },
    'reveal': {
    },
    'charge': {
    },
    'record': {
    },
    'clothes': {
    },
    'child': {
    },
    'beyond': {
    },
    'spend': {
    },
    'tonight': {
    },
    'loud': {
    },
    'tire': {
    },
    'shrug': {
    },
    'slam': {
    },
    'position': {
    },
    'arrive': {
    },
    'animal': {
    },
    'brown': {
    },
    'somewhere': {
    },
    'tape': {
    },
    'soldier': {
    },
    'nose': {
    },
    'tight': {
    },
    'paint': {
    },
    'agent': {
    },
    'hate': {
    },
    'knife': {
    },
    'colour': {
    },
    'color': {
    },
    'strike': {
    },
    'party': {
    },
    'fifty': {
    },
    'quick': {
    },
    'news': {
    },
    'tomorrow': {
    },
    'strange': {
    },
    'speed': {
    },
    'disappear': {
    },
    'hurry': {
    },
    'file': {
    },
    'deck': {
    },
    'possible': {
    },
    'beneath': {
    },
    'bright': {
    },
    'country': {
    },
    'handle': {
    },
    'act': {
    },
    'afternoon': {
    },
    'metal': {
    },
    'telephone': {
    },
    'evening': {
    },
    'seven': {
    },
    'certain': {
    },
    'crash': {
    },
    'quietly': {
    },
    'shall': {
    },
    'frame': {
    },
    'island': {
    },
    'store': {
    },
    'food': {
    },
    'bathroom': {
    },
    'mom': {
    },
    'mirror': {
    },
    'plane': {
    },
    'shape': {
    },
    'sigh': {
    },
    'throat': {
    },
    'fade': {
    },
    'important': {
    },
    'main': {
    },
    'sometimes': {
    },
    'ball': {
    },
    'tie': {
    },
    'crack': {
    },
    'dance': {
    },
    'engine': {
    },
    'exit': {
    },
    'itself': {
    },
    'letter': {
    },
    'board': {
    },
    'join': {
    },
    'shock': {
    },
    'everybody': {
    },
    'add': {
    },
    'spin': {
    },
    'ass': {
    },
    'blade': {
    },
    'yard': {
    },
    'hello': {
    },
    'alive': {
    },
    'mine': {
    },
    'pack': {
    },
    'silent': {
    },
    'teeth': {
    },
    'crazy': {
    },
    'gate': {
    },
    'none': {
    },
    'third': {
    },
    'wake': {
    },
    'age': {
    },
    'strong': {
    },
    'clock': {
    },
    'camera': {
    },
    'image': {
    },
    'noise': {
    },
    'marry': {
    },
    'wood': {
    },
    'law': {
    },
    'trust': {
    },
    'consider': {
    },
    'million': {
    },
    'remove': {
    },
    'yell': {
    },
    'struggle': {
    },
    'promise': {
    },
    'instead': {
    },
    'among': {
    },
    'st': {
    },
    'tiny': {
    },
    'slightly': {
    },
    'shop': {
    },
    'hospital': {
    },
    'jesus': {
    },
    'count': {
    },
    'cool': {
    },
    'agree': {
    },
    'river': {
    },
    'scare': {
    },
    'during': {
    },
    'information': {
    },
    'system': {
    },
    'surface': {
    },
    'service': {
    },
    'bridge': {
    },
    'attack': {
    },
    'lawyer': {
    },
    'sing': {
    },
    'motion': {
    },
    'ray': {
    },
    'hill': {
    },
    'elevator': {
    },
    'twist': {
    },
    'dry': {
    },
    'thick': {
    },
    'chief': {
    },
    'button': {
    },
    'level': {
    },
    'general': {
    },
    'flight': {
    },
    'brain': {
    },
    'page': {
    },
    'pour': {
    },
    'doorway': {
    },
    'tall': {
    },
    'jacket': {
    },
    'bone': {
    },
    'sink': {
    },
    'circle': {
    },
    'gaze': {
    },
    'drag': {
    },
    'desert': {
    },
    'certainly': {
    },
    'fish': {
    },
    'beach': {
    },
    'single': {
    },
    'team': {
    },
    'bottom': {
    },
    'secret': {
    },
    'immediately': {
    },
    'concern': {
    },
    'husband': {
    },
    'burst': {
    },
    'sell': {
    },
    'leap': {
    },
    'pound': {
    },
    'escape': {
    },
    'cloud': {
    },
    'rear': {
    },
    'simply': {
    },
    'message': {
    },
    'detective': {
    },
    'manage': {
    },
    'creature': {
    },
    'themselves': {
    },
    'roof': {
    },
    'dinner': {
    },
    'gesture': {
    },
    'army': {
    },
    'switch': {
    },
    'nurse': {
    },
    'expression': {
    },
    'yellow': {
    },
    'sergeant': {
    },
    'warm': {
    },
    'roar': {
    },
    'club': {
    },
    'pop': {
    },
    'grand': {
    },
    'bite': {
    },
    'coat': {
    },
    'size': {
    },
    'however': {
    },
    'cat': {
    },
    'type': {
    },
    'thin': {
    },
    'dozen': {
    },
    'crew': {
    },
    'present': {
    },
    'shoe': {
    },
    'doubt': {
    },
    'settle': {
    },
    'daughter': {
    },
    'anybody': {
    },
    'grip': {
    },
    'completely': {
    },
    'nearly': {
    },
    'pair': {
    },
    'nine': {
    },
    'gather': {
    },
    'bud': {
    },
    'bird': {
    },
    'sister': {
    },
    'special': {
    },
    'hallway': {
    },
    'base': {
    },
    'mountain': {
    },
    'flat': {
    },
    'sweat': {
    },
    'gently': {
    },
    'spread': {
    },
    'wire': {
    },
    'bullet': {
    },
    'stretch': {
    },
    'master': {
    },
    'cell': {
    },
    'counter': {
    },
    'private': {
    },
    'flame': {
    },
    'sick': {
    },
    'rip': {
    },
    'entrance': {
    },
    'sheet': {
    },
    'entire': {
    },
    'steal': {
    },
    'warn': {
    },
    'judge': {
    },
    'perfect': {
    },
    'command': {
    },
    'sharp': {
    },
    'scene': {
    },
    'screen': {
    },
    'conversation': {
    },
    'dear': {
    },
    'whether': {
    },
    'cup': {
    },
    'ceiling': {
    },
    'fit': {
    },
    'narrow': {
    },
    'imagine': {
    },
    'christ': {
    },
    'simple': {
    },
    'colonel': {
    },
    'pilot': {
    },
    'cheek': {
    },
    'grace': {
    },
    'photo': {
    },
    'buddy': {
    },
    'excuse': {
    },
    'frown': {
    },
    'tunnel': {
    },
    'fix': {
    },
    'hat': {
    },
    'snow': {
    },
    'planet': {
    },
    'glow': {
    },
    'double': {
    },
    'recognize': {
    },
    'sudden': {
    },
    'steel': {
    },
    'worse': {
    },
    'wipe': {
    },
    'stupid': {
    },
    'monitor': {
    },
    'test': {
    },
    'square': {
    },
    'mention': {
    },
    'uniform': {
    },
    'south': {
    },
    'travel': {
    },
    'mask': {
    },
    'fifteen': {
    },
    'class': {
    },
    'path': {
    },
    'match': {
    },
    'grant': {
    },
    'memory': {
    },
    'serious': {
    },
    'softly': {
    },
    'dust': {
    },
    'major': {
    },
    'wild': {
    },
    'calm': {
    },
    'dig': {
    },
    'angry': {
    },
    'wet': {
    },
    'contact': {
    },
    'tank': {
    },
    'wrap': {
    },
    'action': {
    },
    'click': {
    },
    'tower': {
    },
    'crawl': {
    },
    'whose': {
    },
    'prepare': {
    },
    'thought': {
    },
    'load': {
    },
    'trip': {
    },
    'ignore': {
    },
    'lieutenant': {
    },
    'enjoy': {
    },
    'wing': {
    },
    'gas': {
    },
    'sweep': {
    },
    'north': {
    },
    'stage': {
    },
    'bet': {
    },
    'peer': {
    },
    'poor': {
    },
    'neither': {
    },
    'barely': {
    },
    'rifle': {
    },
    'west': {
    },
    'row': {
    },
    'storm': {
    },
    'wound': {
    },
    'plate': {
    },
    'shift': {
    },
    'drug': {
    },
    'date': {
    },
    'plastic': {
    },
    'ghost': {
    },
    'pale': {
    },
    'loose': {
    },
    'aside': {
    },
    'emerge': {
    },
    'hesitate': {
    },
    'often': {
    },
    'mistake': {
    },
    'bang': {
    },
    'heat': {
    },
    'bow': {
    },
    'list': {
    },
    'movement': {
    },
    'complete': {
    },
    'include': {
    },
    'feed': {
    },
    'blast': {
    },
    'explode': {
    },
    'bitch': {
    },
    'weight': {
    },
    'address': {
    },
    'church': {
    },
    'surround': {
    },
    'pile': {
    },
    'worth': {
    },
    'attempt': {
    },
    'nervous': {
    },
    'government': {
    },
    'dawn': {
    },
    'trail': {
    },
    'plant': {
    },
    'final': {
    },
    'passenger': {
    },
    'pool': {
    },
    'pace': {
    },
    'smash': {
    },
    'television': {
    },
    'panic': {
    },
    'self': {
    },
    'admit': {
    },
    'directly': {
    },
    'serve': {
    },
    'map': {
    },
    'fat': {
    },
    'van': {
    },
    'commander': {
    },
    'goddamn': {
    },
    'somehow': {
    },
    'post': {
    },
    'frighten': {
    },
    'continuous': {
    },
    'jerk': {
    },
    'blink': {
    },
    'boss': {
    },
    'nor': {
    },
    'operation': {
    },
    'glad': {
    },
    'pistol': {
    },
    'suggest': {
    },
    'teach': {
    },
    'although': {
    },
    'lucky': {
    },
    'rule': {
    },
    'apart': {
    },
    'bloody': {
    },
    'flip': {
    },
    'flesh': {
    },
    'witness': {
    },
    'quarter': {
    },
    'relax': {
    },
    'clearly': {
    },
    'repeat': {
    },
    'asleep': {
    },
    'helicopter': {
    },
    'killer': {
    },
    'member': {
    },
    'parent': {
    },
    'odd': {
    },
    'bomb': {
    },
    'release': {
    },
    'unless': {
    },
    'punch': {
    },
    'history': {
    },
    'busy': {
    },
    'bond': {
    },
    'copy': {
    },
    'accept': {
    },
    'destroy': {
    },
    'anymore': {
    },
    'cab': {
    },
    'experience': {
    },
    'shove': {
    },
    'bastard': {
    },
    'fold': {
    },
    'twelve': {
    },
    'evidence': {
    },
    'bus': {
    },
    'brief': {
    },
    'tap': {
    },
    'drift': {
    },
    'prove': {
    },
    'personal': {
    },
    'rub': {
    },
    'interrupt': {
    },
    'brush': {
    },
    'rope': {
    },
    'alarm': {
    },
    'east': {
    },
    'terrible': {
    },
    'tip': {
    },
    'spring': {
    },
    'protect': {
    },
    'involve': {
    },
    'whip': {
    },
    'lunch': {
    },
    'reporter': {
    },
    'suspect': {
    },
    'evil': {
    },
    'booth': {
    },
    'chamber': {
    },
    'shower': {
    },
    'examine': {
    },
    'sweet': {
    },
    'choice': {
    },
    'palm': {
    },
    'assume': {
    },
    'obviously': {
    },
    'traffic': {
    },
    'hook': {
    },
    'wrist': {
    },
    'cabin': {
    },
    'enemy': {
    },
    'smoke': {
    },
    'silver': {
    },
    'pipe': {
    },
    'normal': {
    },
    'chase': {
    },
    'secretary': {
    },
    'discover': {
    },
    'wine': {
    },
    'gasp': {
    },
    'fail': {
    },
    'dive': {
    },
    'breathe': {
    },
    'moon': {
    },
    'dissolve': {
    },
    'sex': {
    },
    'ace': {
    },
    'newspaper': {
    },
    'twice': {
    },
    'choose': {
    },
    'float': {
    },
    'uncle': {
    },
    'aim': {
    },
    'public': {
    },
    'section': {
    },
    'dangerous': {
    },
    'shine': {
    },
    'gentleman': {
    },
    'effect': {
    },
    'nearby': {
    },
    'flower': {
    },
    'faint': {
    },
    'pat': {
    },
    'confuse': {
    },
    'visit': {
    },
    'film': {
    },
    'future': {
    },
    'queen': {
    },
    'stomach': {
    },
    'demand': {
    },
    'department': {
    },
    'boot': {
    },
    'trap': {
    },
    'photograph': {
    },
    'impossible': {
    },
    'mad': {
    },
    'guest': {
    },
    'joke': {
    },
    'taste': {
    },
    'fist': {
    },
    'squeeze': {
    },
    'especially': {
    },
    'stun': {
    },
    'wooden': {
    },
    'leather': {
    },
    'slap': {
    },
    'purpose': {
    },
    'band': {
    },
    'tough': {
    },
    'vehicle': {
    },
    'focus': {
    },
    'usually': {
    },
    'video': {
    },
    'luck': {
    },
    'iron': {
    },
    'effort': {
    },
    'duty': {
    },
    'chick': {
    },
    'fresh': {
    },
    'glare': {
    },
    'swear': {
    },
    'beauty': {
    },
    'tongue': {
    },
    'fun': {
    },
    'cable': {
    },
    'backward': {
    },
    'honour': {
    },
    'honor': {
    },
    'cash': {
    },
    'alien': {
    },
    'detail': {
    },
    'lab': {
    },
    'director': {
    },
    'clerk': {
    },
    'fence': {
    },
    'crime': {
    },
    'strip': {
    },
    'familiar': {
    },
    'local': {
    },
    'price': {
    },
    'signal': {
    },
    'giant': {
    },
    'chain': {
    },
    'smart': {
    },
    'various': {
    },
    'pants': {
    },
    'opposite': {
    },
    'breathing': {
    },
    'object': {
    },
    'grass': {
    },
    'apparently': {
    },
    'lobby': {
    },
    'dial': {
    },
    'naked': {
    },
    'intend': {
    },
    'honey': {
    },
    'support': {
    },
    'blond': {
    },
    'e': {
    },
    'print': {
    },
    'suck': {
    },
    'garage': {
    },
    'pattern': {
    },
    'clutch': {
    },
    'sand': {
    },
    'tail': {
    },
    'student': {
    },
    'swim': {
    },
    'dirty': {
    },
    'forehead': {
    },
    'strength': {
    },
    'anger': {
    },
    'laughter': {
    },
    'distant': {
    },
    'subject': {
    },
    'remind': {
    },
    'garden': {
    },
    'forest': {
    },
    'camp': {
    },
    'snake': {
    },
    'echo': {
    },
    'partner': {
    },
    'military': {
    },
    'client': {
    },
    'everywhere': {
    },
    'skull': {
    },
    'exchange': {
    },
    'program': {
    },
    'programme': {
    },
    'usual': {
    },
    'restaurant': {
    },
    'equipment': {
    },
    'hug': {
    },
    'difficult': {
    },
    'till': {
    },
    'buck': {
    },
    'react': {
    },
    'rich': {
    },
    'swallow': {
    },
    'curtain': {
    },
    'bury': {
    },
    'stream': {
    },
    'president': {
    },
    'wanna': {
    },
    'duck': {
    },
    'bolt': {
    },
    'display': {
    },
    'golden': {
    },
    'pressure': {
    },
    'indicate': {
    },
    'bay': {
    },
    'avoid': {
    },
    'breast': {
    },
    'condition': {
    },
    'sip': {
    },
    'code': {
    },
    'account': {
    },
    'tremble': {
    },
    'data': {
    },
    'mutter': {
    },
    'anywhere': {
    },
    'library': {
    },
    'welcome': {
    },
    'prison': {
    },
    'kneel': {
    },
    'lake': {
    },
    'instant': {
    },
    'airport': {
    },
    'cast': {
    },
    'indeed': {
    },
    'claim': {
    },
    'target': {
    },
    'pin': {
    },
    'respect': {
    },
    'art': {
    },
    'easily': {
    },
    'attorney': {
    },
    'fair': {
    },
    'muscle': {
    },
    'horror': {
    },
    'bare': {
    },
    'beast': {
    },
    'pleasure': {
    },
    'puzzle': {
    },
    'grave': {
    },
    'trace': {
    },
    'excite': {
    },
    'length': {
    },
    'mount': {
    },
    'risk': {
    },
    'ocean': {
    },
    'energy': {
    },
    'amaze': {
    },
    'envelope': {
    },
    'contain': {
    },
    'audience': {
    },
    'stumble': {
    },
    'leader': {
    },
    'difference': {
    },
    'barrel': {
    },
    'wonderful': {
    },
    'demon': {
    },
    'daemon': {
    },
    'besides': {
    },
    'dirt': {
    },
    'accident': {
    },
    'steady': {
    },
    'interior': {
    },
    'mission': {
    },
    'victim': {
    },
    'absolutely': {
    },
    'patient': {
    },
    'occur': {
    },
    'alright': {
    },
    'receive': {
    },
    'split': {
    },
    'practice': {
    },
    'upstairs': {
    },
    'panel': {
    },
    'ease': {
    },
    'advance': {
    },
    'couch': {
    },
    'correct': {
    },
    'firm': {
    },
    'smooth': {
    },
    'powerful': {
    },
    'slight': {
    },
    'scan': {
    },
    'credit': {
    },
    'unit': {
    },
    'glove': {
    },
    'claw': {
    },
    'gear': {
    },
    'engineer': {
    },
    'awake': {
    },
    'ought': {
    },
    'stack': {
    },
    'flow': {
    },
    'whom': {
    },
    'belong': {
    },
    'ancient': {
    },
    'decision': {
    },
    'direct': {
    },
    'cap': {
    },
    'highway': {
    },
    'exist': {
    },
    'oil': {
    },
    'monster': {
    },
    'missing': {
    },
    'temple': {
    },
    'spit': {
    },
    'ma': {
    },
    'chin': {
    },
    'priest': {
    },
    'extend': {
    },
    'sake': {
    },
    'magazine': {
    },
    'mass': {
    },
    'ticket': {
    },
    'weather': {
    },
    'damage': {
    },
    'spill': {
    },
    'refuse': {
    },
    'vision': {
    },
    'event': {
    },
    'flashlight': {
    },
    'manager': {
    },
    'presence': {
    },
    'drawer': {
    },
    'thumb': {
    },
    'favour': {
    },
    'favor': {
    },
    'march': {
    },
    'create': {
    },
    'jam': {
    },
    'danger': {
    },
    'respond': {
    },
    'summer': {
    },
    'assistant': {
    },
    'massive': {
    },
    'century': {
    },
    'shatter': {
    },
    'female': {
    },
    'strain': {
    },
    'justice': {
    },
    'project': {
    },
    'emergency': {
    },
    'customer': {
    },
    'pad': {
    },
    'collapse': {
    },
    'arrest': {
    },
    'trick': {
    },
    'series': {
    },
    'electric': {
    },
    'al': {
    },
    'bug': {
    },
    'lap': {
    },
    'rail': {
    },
    'sixty': {
    },
    'porch': {
    },
    'screw': {
    },
    'cliff': {
    },
    'pump': {
    },
    'design': {
    },
    'response': {
    },
    'fellow': {
    },
    'supply': {
    },
    'mill': {
    },
    'style': {
    },
    'tube': {
    },
    'bowl': {
    },
    'orange': {
    },
    'perfectly': {
    },
    'shotgun': {
    },
    'necessary': {
    },
    'pink': {
    },
    'obvious': {
    },
    'village': {
    },
    'policeman': {
    },
    'closet': {
    },
    'result': {
    },
    'regard': {
    },
    'possibly': {
    },
    'hiss': {
    },
    'sidewalk': {
    },
    'stride': {
    },
    'breakfast': {
    },
    'trunk': {
    },
    'stranger': {
    },
    'dude': {
    },
    'employ': {
    },
    'branch': {
    },
    'enormous': {
    },
    'site': {
    },
    'lamp': {
    },
    'cage': {
    },
    'college': {
    },
    'terrify': {
    },
    'ruin': {
    },
    'totally': {
    },
    'wander': {
    },
    'bore': {
    },
    'manner': {
    },
    'yesterday': {
    },
    'produce': {
    },
    'hood': {
    },
    'cost': {
    },
    'nail': {
    },
    'discuss': {
    },
    'shell': {
    },
    'whistle': {
    },
    'dock': {
    },
    'feature': {
    },
    'dining': {
    },
    'buzz': {
    },
    'heaven': {
    },
    'upset': {
    },
    'steam': {
    },
    'bunch': {
    },
    'basement': {
    },
    'junior': {
    },
    'scar': {
    },
    'bleed': {
    },
    'nature': {
    },
    'curve': {
    },
    'official': {
    },
    'taxi': {
    },
    'court': {
    },
    'greet': {
    },
    'silently': {
    },
    'rough': {
    },
    'explosion': {
    },
    'piss': {
    },
    'replace': {
    },
    'drunk': {
    },
    'process': {
    },
    'curse': {
    },
    'jungle': {
    },
    'seal': {
    },
    'dump': {
    },
    'particular': {
    },
    'sport': {
    },
    'reaction': {
    },
    'cook': {
    },
    'stir': {
    },
    'intelligence': {
    },
    'embarrass': {
    },
    'seek': {
    },
    'pen': {
    },
    'survive': {
    },
    'central': {
    },
    'staff': {
    },
    'crouch': {
    },
    'rabbit': {
    },
    'creep': {
    },
    'castle': {
    },
    'observe': {
    },
    'arrange': {
    },
    'scratch': {
    },
    'bat': {
    },
    'range': {
    },
    'murmur': {
    },
    'towel': {
    },
    'cough': {
    },
    'hire': {
    },
    'swell': {
    },
    'medical': {
    },
    'male': {
    },
    'heel': {
    },
    'separate': {
    },
    'v': {
    },
    'cheer': {
    },
    'aircraft': {
    },
    'convince': {
    },
    'forever': {
    },
    'pitch': {
    },
    'upper': {
    },
    'treat': {
    },
    'instantly': {
    },
    'knowledge': {
    },
    'rat': {
    },
    'cave': {
    },
    'degree': {
    },
    'dodge': {
    },
    'connect': {
    },
    'prisoner': {
    },
    'scramble': {
    },
    'visible': {
    },
    'pretend': {
    },
    'plain': {
    },
    'vanish': {
    },
    'shelf': {
    },
    'player': {
    },
    'universe': {
    },
    'script': {
    },
    'flicker': {
    },
    'weird': {
    },
    'balance': {
    },
    'language': {
    },
    'blank': {
    },
    'issue': {
    },
    'weak': {
    },
    'entirely': {
    },
    'shield': {
    },
    'marine': {
    },
    'overhead': {
    },
    'solid': {
    },
    'sail': {
    },
    'stagger': {
    },
    'elbow': {
    },
    'pit': {
    },
    'mister': {
    },
    'eleven': {
    },
    'platform': {
    },
    'rapidly': {
    },
    'egg': {
    },
    'dare': {
    },
    'owner': {
    },
    'suffer': {
    },
    'hammer': {
    },
    'thunder': {
    },
    'corpse': {
    },
    'stroke': {
    },
    'heavily': {
    },
    'clip': {
    },
    'total': {
    },
    'helmet': {
    },
    'bench': {
    },
    'source': {
    },
    'scatter': {
    },
    'eventually': {
    },
    'spray': {
    },
    'trade': {
    },
    'mix': {
    },
    'descend': {
    },
    'sonny': {
    },
    'boom': {
    },
    'crush': {
    },
    'relief': {
    },
    'senator': {
    },
    'trigger': {
    },
    'insist': {
    },
    'deliver': {
    },
    'conference': {
    },
    'terror': {
    },
    'jar': {
    },
    'argue': {
    },
    'require': {
    },
    'worst': {
    },
    'recall': {
    },
    'halt': {
    },
    'badly': {
    },
    'collect': {
    },
    'rage': {
    },
    'blanket': {
    },
    'tray': {
    },
    'drip': {
    },
    'limit': {
    },
    'fan': {
    },
    'attach': {
    },
    'upward': {
    },
    'dim': {
    },
    'deputy': {
    },
    'sad': {
    },
    'flick': {
    },
    'carpet': {
    },
    'expose': {
    },
    'sob': {
    },
    'strap': {
    },
    'natural': {
    },
    'curious': {
    },
    'starling': {
    },
    'stern': {
    },
    'comment': {
    },
    'bounce': {
    },
    'threaten': {
    },
    'waiter': {
    },
    'moan': {
    },
    'exhaust': {
    },
    'nervously': {
    },
    'likely': {
    },
    'sailor': {
    },
    'concentrate': {
    },
    'character': {
    },
    'defense': {
    },
    'term': {
    },
    'random': {
    },
    'rose': {
    },
    'slope': {
    },
    'abruptly': {
    },
    'fashion': {
    },
    'awful': {
    },
    'glimpse': {
    },
    'describe': {
    },
    'extra': {
    },
    'purse': {
    },
    'fully': {
    },
    'squad': {
    },
    'peace': {
    },
    'mail': {
    },
    'briefly': {
    },
    'spirit': {
    },
    'nowhere': {
    },
    'holy': {
    },
    'thrust': {
    },
    'operate': {
    },
    'otherwise': {
    },
    'current': {
    },
    'groan': {
    },
    'stain': {
    },
    'horn': {
    },
    'rocky': {
    },
    'admiral': {
    },
    'diamond': {
    },
    'cock': {
    },
    'waist': {
    },
    'merely': {
    },
    'chuckle': {
    },
    'despite': {
    },
    'concrete': {
    },
    'chip': {
    },
    'common': {
    },
    'magic': {
    },
    'folk': {
    },
    'dart': {
    },
    'professional': {
    },
    'fault': {
    },
    'avenue': {
    },
    'devil': {
    },
    'tuck': {
    },
    'brand': {
    },
    'tense': {
    },
    'chew': {
    },
    'bye': {
    },
    'emotion': {
    },
    'ash': {
    },
    'suitcase': {
    },
    'bound': {
    },
    'wolf': {
    },
    'trailer': {
    },
    'cockpit': {
    },
    'tea': {
    },
    'unable': {
    },
    'national': {
    },
    'determine': {
    },
    'hungry': {
    },
    'quit': {
    },
    'register': {
    },
    'announce': {
    },
    'worker': {
    },
    'sunlight': {
    },
    'jail': {
    },
    'bride': {
    },
    'plenty': {
    },
    'grunt': {
    },
    'proud': {
    },
    'gift': {
    },
    'satisfy': {
    },
    'grasp': {
    },
    'angel': {
    },
    'christmas': {
    },
    'owe': {
    },
    'guide': {
    },
    'disturb': {
    },
    'reflect': {
    },
    'united': {
    },
    'willing': {
    },
    'title': {
    },
    'blame': {
    },
    'interview': {
    },
    'gut': {
    },
    'howl': {
    },
    'mouse': {
    },
    'beg': {
    },
    'vast': {
    },
    'cheap': {
    },
    'bike': {
    },
    'model': {
    },
    'impress': {
    },
    'gang': {
    },
    'automatic': {
    },
    'haul': {
    },
    'patrol': {
    },
    'lawn': {
    },
    'criminal': {
    },
    'legal': {
    },
    'ladder': {
    },
    'physical': {
    },
    'rate': {
    },
    'rumble': {
    },
    'troop': {
    },
    'device': {
    },
    'bark': {
    },
    'comfortable': {
    },
    'mayor': {
    },
    'hunt': {
    },
    'joint': {
    },
    'provide': {
    },
    'tumble': {
    },
    'snatch': {
    },
    'background': {
    },
    'appreciate': {
    },
    'possibility': {
    },
    'whale': {
    },
    'hunter': {
    },
    'unlock': {
    },
    'monkey': {
    },
    'fourth': {
    },
    'receiver': {
    },
    'nerve': {
    },
    'hip': {
    },
    'pot': {
    },
    'launch': {
    },
    'joy': {
    },
    'authority': {
    },
    'sunday': {
    },
    'shade': {
    },
    'gain': {
    },
    'motel': {
    },
    'string': {
    },
    'widen': {
    },
    'jaw': {
    },
    'briefcase': {
    },
    'choke': {
    },
    'meter': {
    },
    'metre': {
    },
    'hum': {
    },
    'brick': {
    },
    'identify': {
    },
    'recover': {
    },
    'bush': {
    },
    'drain': {
    },
    'abandon': {
    },
    'clothing': {
    },
    'fry': {
    },
    'protest': {
    },
    'bump': {
    },
    'original': {
    },
    'professor': {
    },
    'museum': {
    },
    'connection': {
    },
    'content': {
    },
    'lane': {
    },
    'licence': {
    },
    'license': {
    },
    'particularly': {
    },
    'county': {
    },
    'cigar': {
    },
    'port': {
    },
    'eyebrow': {
    },
    'rattle': {
    },
    'shiver': {
    },
    'shriek': {
    },
    'beard': {
    },
    'assure': {
    },
    'stock': {
    },
    'coast': {
    },
    'hatch': {
    },
    'disgust': {
    },
    'valley': {
    },
    'lick': {
    },
    'rack': {
    },
    'broad': {
    },
    'lack': {
    },
    'patch': {
    },
    'opinion': {
    },
    'growl': {
    },
    'suite': {
    },
    'pray': {
    },
    'ugly': {
    },
    'secure': {
    },
    'increase': {
    },
    'jury': {
    },
    'straighten': {
    },
    'jeep': {
    },
    'activity': {
    },
    'dusk': {
    },
    'skip': {
    },
    'locate': {
    },
    'driveway': {
    },
    'motor': {
    },
    'wallet': {
    },
    'gentle': {
    },
    'package': {
    },
    'collar': {
    },
    'rag': {
    },
    'opportunity': {
    },
    'curl': {
    },
    'drill': {
    },
    'tightly': {
    },
    'seventy': {
    },
    'hero': {
    },
    'poke': {
    },
    'breeze': {
    },
    'market': {
    },
    'teacher': {
    },
    'slice': {
    },
    'wildly': {
    },
    'shaft': {
    },
    'rescue': {
    },
    'cabinet': {
    },
    'downstairs': {
    },
    'innocent': {
    },
    'belly': {
    },
    'ankle': {
    },
    'marshal': {
    },
    'l': {
    },
    'scientist': {
    },
    'reverse': {
    },
    'saturday': {
    },
    'material': {
    },
    'knot': {
    },
    'shudder': {
    },
    'reality': {
    },
    'mood': {
    },
    'rent': {
    },
    'whoever': {
    },
    'investigation': {
    },
    'tent': {
    },
    'theatre': {
    },
    'theater': {
    },
    'farm': {
    },
    'knight': {
    },
    'honest': {
    },
    'dumb': {
    },
    'research': {
    },
    'limp': {
    },
    'fling': {
    },
    'winter': {
    },
    'percent': {
    },
    'appearance': {
    },
    'sharply': {
    },
    'cord': {
    },
    'nightmare': {
    },
    'tilt': {
    },
    'amount': {
    },
    'dot': {
    },
    'fuel': {
    },
    'neighbo': {
    },
    'u': {
    },
    'rhood': {
    },
    'speech': {
    },
    'stall': {
    },
    'progress': {
    },
    'torch': {
    },
    'sandwich': {
    },
    'cart': {
    },
    'statement': {
    },
    'shave': {
    },
    'handsome': {
    },
    'nut': {
    },
    'channel': {
    },
    'furious': {
    },
    'lightning': {
    },
    'route': {
    },
    'relieve': {
    },
    'pillow': {
    },
    'aunt': {
    },
    'halfway': {
    },
    'invite': {
    },
    'somewhat': {
    },
    'bullshit': {
    },
    'request': {
    },
    'proper': {
    },
    'plunge': {
    },
    'contract': {
    },
    'n': {
    },
    'desperate': {
    },
    'footstep': {
    },
    'truly': {
    },
    'rubber': {
    },
    'wagon': {
    },
    'rocket': {
    },
    'fighter': {
    },
    'tug': {
    },
    'embrace': {
    },
    'brilliant': {
    },
    'waitress': {
    },
    'splash': {
    },
    'structure': {
    },
    'desperately': {
    },
    'poison': {
    },
    'flood': {
    },
    'asshole': {
    },
    'peel': {
    },
    'according': {
    },
    'blaze': {
    },
    'goodbye': {
    },
    'height': {
    },
    'swirl': {
    },
    'retreat': {
    },
    'insert': {
    },
    'streak': {
    },
    'pure': {
    },
    'technician': {
    },
    'shore': {
    },
    'prefer': {
    },
    'wade': {
    },
    'underneath': {
    },
    'darling': {
    },
    'amber': {
    },
    'introduce': {
    },
    'closely': {
    },
    'milk': {
    },
    'theory': {
    },
    'lid': {
    },
    'sword': {
    },
    'circumstance': {
    },
    'measure': {
    },
    'penny': {
    },
    'pierce': {
    },
    'dragon': {
    },
    'fog': {
    },
    'console': {
    },
    'definitely': {
    },
    'cling': {
    },
    'inner': {
    },
    'forgive': {
    },
    'remark': {
    },
    'stab': {
    },
    'harbour': {
    },
    'harbor': {
    },
    'calmly': {
    },
    'dash': {
    },
    'commit': {
    },
    'hawk': {
    },
    'develop': {
    },
    'wedding': {
    },
    'gleam': {
    },
    'spell': {
    },
    'instrument': {
    },
    'horizon': {
    },
    'mud': {
    },
    'threat': {
    },
    'aboard': {
    },
    'instruction': {
    },
    'spare': {
    },
    'silly': {
    },
    'pig': {
    },
    'toilet': {
    },
    'operator': {
    },
    'seriously': {
    },
    'communication': {
    },
    'vampire': {
    },
    'gene': {
    },
    'candle': {
    },
    'toy': {
    },
    'estate': {
    },
    'marriage': {
    },
    'complex': {
    },
    'passage': {
    },
    'crane': {
    },
    'drum': {
    },
    'overlook': {
    },
    'favourite': {
    },
    'favorite': {
    },
    'chill': {
    },
    'desire': {
    },
    'score': {
    },
    'executive': {
    },
    'mental': {
    },
    'loudly': {
    },
    'loss': {
    },
    'link': {
    },
    'sway': {
    },
    'deny': {
    },
    'steer': {
    },
    'purple': {
    },
    'jeans': {
    },
    'armour': {
    },
    'armor': {
    },
    'squint': {
    },
    'firmly': {
    },
    'expensive': {
    },
    'skirt': {
    },
    'hop': {
    },
    'liquid': {
    },
    'stiff': {
    },
    'cowboy': {
    },
    'sale': {
    },
    'arrow': {
    },
    'nasty': {
    },
    'aisle': {
    },
    'windshield': {
    },
    'darken': {
    },
    'siren': {
    },
    'transfer': {
    },
    'sniff': {
    },
    'career': {
    },
    'navy': {
    },
    'palace': {
    },
    'treasure': {
    },
    'warrior': {
    },
    'cream': {
    },
    'amuse': {
    },
    'dangle': {
    },
    'escort': {
    },
    'coin': {
    },
    'dean': {
    },
    'furniture': {
    },
    'flush': {
    },
    'bubble': {
    },
    'famous': {
    },
    'twin': {
    },
    'insurance': {
    },
    'wednesday': {
    },
    'exterior': {
    },
    'shepherd': {
    },
    'afford': {
    },
    'charm': {
    },
    'ourselves': {
    },
    'alert': {
    },
    'pride': {
    },
    'screenplay': {
    },
    'filter': {
    },
    'freedom': {
    },
    'hover': {
    },
    'brake': {
    },
    'establish': {
    },
    'flee': {
    },
    'university': {
    },
    'angrily': {
    },
    'pill': {
    },
    'rank': {
    },
    'silk': {
    },
    'regular': {
    },
    'screech': {
    },
    'document': {
    },
    'harm': {
    },
    'statue': {
    },
    'spark': {
    },
    'thigh': {
    },
    'eighty': {
    },
    'due': {
    },
    'carve': {
    },
    'blur': {
    },
    'conceal': {
    },
    'idiot': {
    },
    'mystery': {
    },
    'slave': {
    },
    'midnight': {
    },
    'guilty': {
    },
    'hut': {
    },
    'ninety': {
    },
    'sue': {
    },
    'represent': {
    },
    'remote': {
    },
    'plus': {
    },
    'bruise': {
    },
    'clay': {
    },
    'relationship': {
    },
    'neighbour': {
    },
    'neighbor': {
    },
    'tension': {
    },
    'standard': {
    },
    'individual': {
    },
    'extremely': {
    },
    'accent': {
    },
    'toe': {
    },
    'affair': {
    },
    'illuminate': {
    },
    'bust': {
    },
    'swarm': {
    },
    'hurl': {
    },
    'casually': {
    },
    'medium': {
    },
    'access': {
    },
    'impression': {
    },
    'uncomfortable': {
    },
    'perform': {
    },
    'unconscious': {
    },
    'locker': {
    },
    'speaker': {
    },
    'visitor': {
    },
    'laser': {
    },
    'personally': {
    },
    'anxious': {
    },
    'deserve': {
    },
    'unusual': {
    },
    'delight': {
    },
    'root': {
    },
    'proceed': {
    },
    'servant': {
    },
    'dish': {
    },
    'federal': {
    },
    'frantically': {
    },
    'robe': {
    },
    'whirl': {
    },
    'horrible': {
    },
    'fumble': {
    },
    'headlight': {
    },
    'probe': {
    },
    'invisible': {
    },
    'etc': {
    },
    'tile': {
    },
    'pleasant': {
    },
    'mist': {
    },
    'snarl': {
    },
    'staircase': {
    },
    'balcony': {
    },
    'divorce': {
    },
    'tourist': {
    },
    'joker': {
    },
    'pole': {
    },
    'column': {
    },
    'confidence': {
    },
    'lad': {
    },
    'tighten': {
    },
    'period': {
    },
    'rob': {
    },
    'fake': {
    },
    'district': {
    },
    'curb': {
    },
    'pulse': {
    },
    'expert': {
    },
    'routine': {
    },
    'terminal': {
    },
    'neat': {
    },
    'hers': {
    },
    'flag': {
    },
    'border': {
    },
    'society': {
    },
    'rid': {
    },
    'winder': {
    },
    'inform': {
    },
    'violet': {
    },
    'batter': {
    },
    'silhouette': {
    },
    'science': {
    },
    'agency': {
    },
    'grind': {
    },
    'doll': {
    },
    'associate': {
    },
    'minister': {
    },
    'former': {
    },
    'incredible': {
    },
    'lunge': {
    },
    'slump': {
    },
    'cautiously': {
    },
    'scrape': {
    },
    'ill': {
    },
    'headquarters': {
    },
    'pal': {
    },
    'arch': {
    },
    'dull': {
    },
    'gale': {
    },
    'maintain': {
    },
    'annoy': {
    },
    'tune': {
    },
    'hick': {
    },
    'schedule': {
    },
    'witch': {
    },
    'depth': {
    },
    'skill': {
    },
    'hush': {
    },
    'lounge': {
    },
    'coffin': {
    },
    'downward': {
    },
    'sneak': {
    },
    'crap': {
    },
    'reflection': {
    },
    'robot': {
    },
    'cargo': {
    },
    'alongside': {
    },
    'log': {
    },
    'ambulance': {
    },
    'exercise': {
    },
    'bartender': {
    },
    'hollow': {
    },
    'advice': {
    },
    'argument': {
    },
    'resume': {
    },
    'casino': {
    },
    'rib': {
    },
    'native': {
    },
    'attendant': {
    },
    'habit': {
    },
    'confirm': {
    },
    'mumble': {
    },
    'senior': {
    },
    'sprawl': {
    },
    'excitement': {
    },
    'bureau': {
    },
    'refer': {
    },
    'spider': {
    },
    'lightly': {
    },
    'flap': {
    },
    'trash': {
    },
    'attitude': {
    },
    'violently': {
    },
    'explanation': {
    },
    'shelter': {
    },
    'engage': {
    },
    'throughout': {
    },
    'chunk': {
    },
    'wreck': {
    },
    'courtyard': {
    },
    'assault': {
    },
    'weep': {
    },
    'wink': {
    },
    'friday': {
    },
    'hint': {
    },
    'freak': {
    },
    'advantage': {
    },
    'wise': {
    },
    'prop': {
    },
    'fleet': {
    },
    'whenever': {
    },
    'huddle': {
    },
    'crate': {
    },
    'deadly': {
    },
    'impact': {
    },
    'studio': {
    },
    'unknown': {
    },
    'pearl': {
    },
    'hull': {
    },
    'recently': {
    },
    'weekend': {
    },
    'scale': {
    },
    'sequence': {
    },
    'bandage': {
    },
    'shame': {
    },
    'urge': {
    },
    'baseball': {
    },
    'chopper': {
    },
    'spy': {
    },
    'monday': {
    },
    'intense': {
    },
    'accompany': {
    },
    'torture': {
    },
    'birthday': {
    },
    'champagne': {
    },
    'suspicious': {
    },
    'assassin': {
    },
    'sentence': {
    },
    'fifth': {
    },
    'zip': {
    },
    'proof': {
    },
    'microphone': {
    },
    'attractive': {
    },
    'political': {
    },
    'aid': {
    },
    'stamp': {
    },
    'piano': {
    },
    'admire': {
    },
    'fairly': {
    },
    'cute': {
    },
    'property': {
    },
    'wail': {
    },
    'naturally': {
    },
    'pencil': {
    },
    'regret': {
    },
    'shed': {
    },
    'holly': {
    },
    'citizen': {
    },
    'clever': {
    },
    'downtown': {
    },
    'handkerchief': {
    },
    'ramp': {
    },
    'fortune': {
    },
    'lung': {
    },
    'article': {
    },
    'eighteen': {
    },
    'apply': {
    },
    'bless': {
    },
    'tend': {
    },
    'tan': {
    },
    'complain': {
    },
    'example': {
    },
    'basket': {
    },
    'super': {
    },
    'vault': {
    },
    'girlfriend': {
    },
    'ability': {
    },
    'limb': {
    },
    'occasionally': {
    },
    'tag': {
    },
    'earn': {
    },
    'seize': {
    },
    'therefore': {
    },
    'dealer': {
    },
    'companion': {
    },
    'confusion': {
    },
    'warehouse': {
    },
    'bath': {
    },
    'collection': {
    },
    'craft': {
    },
    'actor': {
    },
    'chaos': {
    },
    'rod': {
    },
    'occupy': {
    },
    'sack': {
    },
    'suicide': {
    },
    'funeral': {
    },
    'lesson': {
    },
    'ginger': {
    },
    'gin': {
    },
    'prevent': {
    },
    'occasion': {
    },
    'meanwhile': {
    },
    'chili': {
    },
    'fur': {
    },
    'garbage': {
    },
    'tangle': {
    },
    'peek': {
    },
    'rape': {
    },
    'ram': {
    },
    'social': {
    },
    'ordinary': {
    },
    'modern': {
    },
    'lion': {
    },
    'agreement': {
    },
    'homicide': {
    },
    'thump': {
    },
    'division': {
    },
    'laboratory': {
    },
    'horrify': {
    },
    'spike': {
    },
    'sixteen': {
    },
    'previous': {
    },
    'rumour': {
    },
    'rumor': {
    },
    'resist': {
    },
    'notebook': {
    },
    'benefit': {
    },
    'slug': {
    },
    'debris': {
    },
    'solve': {
    },
    'journey': {
    },
    'retire': {
    },
    'chop': {
    },
    'trooper': {
    },
    'possess': {
    },
    'permit': {
    },
    'sugar': {
    },
    'conscious': {
    },
    'rig': {
    },
    'football': {
    },
    'mob': {
    },
    'hunch': {
    },
    'lone': {
    },
    'excellent': {
    },
    'pose': {
    },
    'atmosphere': {
    },
    'available': {
    },
    'apologize': {
    },
    'snort': {
    },
    'international': {
    },
    'sexual': {
    },
    'highly': {
    },
    'drape': {
    },
    'pavement': {
    },
    'lighter': {
    },
    'cuff': {
    },
    'boyfriend': {
    },
    'bind': {
    },
    'plead': {
    },
    'sting': {
    },
    'loom': {
    },
    'responsible': {
    },
    'assignment': {
    },
    'express': {
    },
    'defeat': {
    },
    'underground': {
    },
    'custom': {
    }
};
