var family = JSON.parse(members);
console.table(family);

// images loading
for (var i=0; i<family.length; i++) 
{
    $("#content").append(`<div id=${i} class="image"><img src='${family[i].image}'></div>`);
};

// paragrapf creation
$("#content").after('<p class="name">Click on pictures</p><p class="status"></p><p class="job"></p><input type="submit" value="All"><input type="submit" value="Only family members"><input type="submit" value="Only family friends">');

// click with info filled from json
$('img').on('click',function()
{
    let x = $(this).index('img');
    $('.name').text(family[x].name);
    $('.status').text(family[x].status);
    $('.job').text(family[x].job);
})

// All
$('input:nth-of-type(1)').on('click',function()
{
    $('div').css('visibility','visible');
    $('.name').text('Click on pictures');
    $('.status').text('');
    $('.job').text('');
});

// Family members only
$('input:nth-of-type(2)').on('click',function()
{
    $('.name').text('Click on pictures');
    $('.status').text('');
    $('.job').text('');
    for (var i=0; i<family.length; i++) 
    {
        if (family[i].status !== "family friend") 
        {
            $(`#${i}`).css('visibility','visible');
        } else 
        {
            $(`#${i}`).css('visibility','hidden');
        }   
    }    
});

// Family friends only
$('input:nth-of-type(3)').on('click',function()
{
    $('.name').text('Click on pictures');
    $('.status').text('');
    $('.job').text('');
    for (var i=0; i<family.length; i++) 
    {
        if (family[i].status === "family friend") 
        {
            $(`#${i}`).css('visibility','visible');
        } else 
        {
            $(`#${i}`).css('visibility','hidden');
        }    
    }   
});
