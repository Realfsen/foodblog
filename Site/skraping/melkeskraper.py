import requests
import urllib.request
import time
from bs4 import BeautifulSoup
import locale
import sys
import requests
from colorama import Fore
import json

def recipes(url):
    # try:
        url = 'https://www.tine.no/'+url
        response = requests.get(url)
        if response.status_code == 200:
            soup = BeautifulSoup(response.text, "html.parser")
            # Title
            title = soup.h1.get_text()
            title = decode(title)
            # Description
            desc_el = soup.select_one("[class~=article-preface]")
            desc = desc_el.get_text()
            desc = desc.replace('\n', '')
            desc = decode(desc)
            desc = desc.strip()
            # Ingredients
            ingredient_container = soup.find(id="ingredient-groups-container")
            ingredient_list = ingredient_container.find_all('li')

            ingredients = []

            for ingredient in ingredient_list:
                amount_tag = ingredient.select_one(".o-recipe-ingredients--container__list__amount")
                amount = amount_tag.string
                # print(amount)
                if (ingredient.select_one("span") == None):
                    ingredient_tag = ingredient.select_one("a")
                    ingredient_name = decode(ingredient_tag.string)
                else:
                    ingredient_tag = ingredient.select_one("span")
                    ingredient_name = decode(ingredient_tag.string)
                # print(ingredient_name)

                ingredients.append({'amount': amount, 'name': ingredient_name})
                # finished_ingredient = {ingredient_name:amount}
                # holder = json.loads(ingredients)
                # holder.update(finished_ingredient)
            
            # Picture
            picture_tag = soup.find(id="HeaderMediaContent")
            picture_src = picture_tag['src']
            picture_src = picture_src.replace("160", "1028")
            picture_src = picture_src.replace("90", "720")

            # Process
            steps = soup.select_one(".o-recipe-steps--group__list")
            steps_list = steps.find_all("li")
            finished_steps = []
            for step in steps_list:
                finished_steps.append(decode(step.p.text))

            recipe = {
                'name': title,
                'picture': picture_src,
                'type': 'recipe',
                'link': title,
                'description': desc,
                'ingredients': ingredients,
                'steps': finished_steps
            }

            # print(recipe)
            # return recipe

            print(Fore.GREEN + "======================================================")
            with open('recipes/'+str(title)+'.json', 'w', encoding="utf-8") as outfile:
                json.dump(recipe, outfile, ensure_ascii=False)
                # print(recipe)

            print(Fore.GREEN + "########### Successfully created JSON file ###########")
            return str(title)

        else:
            print(Fore.RED + "ERROR Getting recipe data." + response.status_code)

# For fixing unicode issues
def decode(s):
    s_utf8 = s.encode('latin1')
    return s_utf8.decode('utf-8')

# Opens the URL-list and runs the function for each line
recipe_list = []
F = open("skraping/melke_urls.txt", "r")
for line in F:
    recipe = recipes(line)
    recipe = str(recipe)+".json"
    recipe_list.append(recipe)
    time.sleep(5)

recipe_list_obj = {
    "list": recipe_list
}
F.close()

# Add to master list
with open('recipes/recipes.json', 'w', encoding="utf-8") as recipe_file:
    json.dump(recipe_list_obj, recipe_file,  ensure_ascii=False)
    # print(recipe)
