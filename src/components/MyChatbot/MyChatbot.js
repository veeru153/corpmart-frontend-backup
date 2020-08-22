import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import { withRouter } from 'react-router-dom';
import Axios from '../../axios';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Poppins',
    headerBgColor: '#4AB9CA',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#4AB9CA',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
};

const styles = {
    root: {
        height: 440,
        textAlign: 'end',
    },
    content: {
        height: 324,
        overflow: 'scroll'
    },
}

class MyChatbot extends Component {

    handleEnd = async ({ values }) => {
        console.log(values);
        try {
            let req = await Axios.post('/chatbot-request', {
                name: 'Chatbot User',
                mobile: values[1],
                email: values[2],
                query: 'Chatbot Request',
            })
        } catch (e) { console.log(e.response); }
    }

    render() {
        const steps = [
            {
                id: 'init',
                message: 'Are you looking to acquire a business or sell a business?',
                trigger: 'initOptions',
            },
            {
                id: 'initOptions',
                options: [
                    { value: 'acquire', label: 'Acquire a business', trigger: () => this.props.history.push('/explore/') },
                    { value: 'sell', label: 'Sell a business', trigger: () => this.props.history.push('/list-your-business/') },
                    { value: 'query', label: 'Any query? Arrange a callback', trigger: 'contactMsg' },
                ]
            },
            {
                id: 'contactMsg',
                message: 'Please provide us with your contact details.',
                trigger: 'mobileMsg',
            },
            {
                id: 'mobileMsg',
                message: 'What is your Mobile Number?',
                trigger: 'mobileNo',
            },
            {
                id: 'mobileNo',
                user: true,
                validator: (value) => {
                    const regex = new RegExp(/^[0-9]*$/g)
                    if(!regex.test(value) || value.length != 10) {
                        return "Enter a Valid Mobile Number."
                    } else {
                        return true;
                    }
                },
                trigger: 'emailLabel',
            },
            {
                id: 'emailLabel',
                message: 'What is your Email ID?',
                trigger: 'email',
            },
            {
                id: 'email',
                user: true,
                validator: (value) => {
                    const regex = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g;
                    if(!regex.test(value)) {
                        return "Enter a Valid Email ID."
                    } else {
                        return true;
                    }
                },
                trigger: 'finish',
            },
            {
                id: 'finish',
                message: 'Our executives will getback to you shortly. Till then you may explore businesses for sale.',
                end: true,
            }]

        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    floating
                    contentStyle={styles.content}
                    steps={steps}
                    style={styles.root}
                    bubbleStyle={{ textAlign: 'start' }}
                    handleEnd={this.handleEnd}
                />
            </ThemeProvider>
        )
    }
}

export default withRouter(MyChatbot);