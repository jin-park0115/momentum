const quotes = [
    {
        quote: 'I can do everything through him who gives me strength.',
        author: 'Philippians 4:13'
    },
    {
        quote: 'But now, Lord, what do i look for? My hope is in you.',
        author: 'Paslms 39:7'
    },
    {
        quote: 'Humble yourseleves before the Lord, and he will lift you up.',
        author: 'James 4:10'
    },
    {
        quote: 'The LORD is my shepherd, I shall not be in want.',
        author: 'Paslms 23:1'
    },
    {
        quote: 'Hatred stirs up dissension, but love covers over all wrongs.',
        author: 'Proverbs 10:12'
    },
    {
        quote: 'My soul finds rest in God alone my salvation comes from him.',
        author: 'Paslms 62:1'
    },
    {
        quote: 'Come to me, all you who are weary and burdened, and I will give you rest.',
        author: 'Matthew 11:1'
    },
    {
        quote: 'In his heart a man plans his course, but the LORD determines his steps.',
        author: 'Proverbs 16:9'
    },
    {
        quote: 'And now these three remain: faith, hope and love. But the greatest of these is love.',
        author: 'I Corinthians 13:13'
    },
    {
        quote: 'For God so loved the world that he gave his one and only Son that whoever believes in him',
        author: 'John 3:16'
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const toDaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = toDaysQuotes.quote;
author.innerText = toDaysQuotes.author;