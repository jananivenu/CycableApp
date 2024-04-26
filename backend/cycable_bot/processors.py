import time

from django_tgbot.decorators import processor
from django_tgbot.state_manager import message_types, update_types, state_types
from django_tgbot.types.update import Update
from django_tgbot.types.replykeyboardmarkup import ReplyKeyboardMarkup
from django_tgbot.types.keyboardbutton import KeyboardButton
from django_tgbot.types.replykeyboardremove import ReplyKeyboardRemove
from django_tgbot.exceptions import ProcessFailure
from .bot import state_manager
from .models import TelegramState
from .bot import TelegramBot

# @processor(state_manager, from_states=state_types.All)
# def hello_world(bot: TelegramBot, update: Update, state: TelegramState):
#     bot.sendMessage(update.get_chat().get_id(), 'Hello!')

state_manager.set_default_update_types(update_types.Message)


@processor(state_manager, success='asked_for_signup')
def greetings(bot: TelegramBot, update: Update, state: TelegramState):
    """
    Processor to send a hello message when the user initiates a conversation.
    """
    if update.message.text.lower() == '/start':
        # Send a hello message when the user starts the conversation
        bot.sendMessage(update.message.chat.id, 'Hello and welcome to Cycable!')
        time.sleep(1)
        bot.sendMessage(update.message.chat.id,
                        'With Cycable, cyclists have the power to swiftly report accidents, near misses, and hazards encountered on the road. ')
        time.sleep(2)
        bot.sendMessage(update.message.chat.id, 'Join us in our mission to make every ride safer with Cycable.')
        time.sleep(2)
        bot.sendMessage(update.message.chat.id, 'Do you have an account?', reply_markup=ReplyKeyboardMarkup.a(keyboard=[
            [KeyboardButton.a(text='Yes!'), KeyboardButton.a(text='Create one now!')]
        ]))


@processor(state_manager, from_states='asked_for_signup', success=state_types.Keep,
           exclude_message_types=message_types.Text)
def text_only(bot, update, state):
    bot.sendMessage(update.get_chat().get_id(), 'I\'d appreciate it if you answer in text format 😅')


@processor(state_manager, from_states='asked_for_signup', message_types=message_types.Text)
def start_signup(bot, update, state):
    chat_id = update.get_chat().get_id()
    text = update.get_message().get_text()
    if text == 'Yes!':
        bot.sendMessage(chat_id, 'Amazing!', reply_markup=ReplyKeyboardRemove.a(remove_keyboard=True))
        state.set_name('asked_for_login')
    elif text == 'Create one now!':
        bot.sendMessage(chat_id, 'Absolutely! Please enter your e-mail:',
                        reply_markup=ReplyKeyboardRemove.a(remove_keyboard=True))
        state.set_name('redirect_to_signup')
    else:
        bot.sendMessage(chat_id, 'I didn\'t get that! Please use the keyboard below')


@processor(state_manager, from_states='asked_for_email', success=state_types.Reset, fail=state_types.Keep,
           message_types=message_types.Text)
def get_email(bot, update, state):
    chat_id = update.get_chat().get_id()
    email = update.get_message().get_text()

    if email.find('@') == -1:
        bot.sendMessage(chat_id, 'Invalid email address! Please Try Again:')
        raise ProcessFailure

    bot.sendMessage(chat_id, 'Congratulations! A verification code has been sent to your email!')
    time.sleep(1)
    bot.sendMessage(chat_id, 'Please enter the verification code:')



# bot.sendMessage(update.message.chat.id, 'What would you like to report?', reply_markup=ReplyKeyboardMarkup.a(keyboard=[
#     [KeyboardButton.a(text='Bicycle Accident')]
# ]))
