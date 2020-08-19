import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import styles from './MyChatbot.module.css';

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

class MyChatbot extends Component {

    componentDidMount() {
        // if(window.innerWidth )
    }

    render() {
        const steps = [
            {
                id: 'opener',
                message: 'Hi, do you have any query?',
                trigger: 'yn'
            },
            {
                id: 'yn',
                options: [
                    { value: 'yes', label: 'Yes', trigger: 'nameLabel' },
                    { value: 'no', label: 'No', trigger: 'contactUs' },
                ],
            },
            {
                id: 'nameLabel',
                message: 'What is your Name?',
                trigger: 'name',
            },
            {
                id: 'name',
                user: true,
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
                option: [{ value: 'noEmail', label: "Don't wish to reveal", trigger: 'mobileLabel' }],
                trigger: 'mobileLabel',
            },
            {
                id: 'mobileLabel',
                message: 'What is your Mobile Number?',
                trigger: 'mobile',
            },
            {
                id: 'mobile',
                user: true,
                option: [{ value: 'noEmail', label: "Don't wish to reveal", trigger: 'queryLabel' }],
                end: true,
            },
            {
                id: 'contactUs',
                message: 'Okay! You can contact us at xyz@email.com',
                end: true,
            }]
    
        return (
            <ThemeProvider theme={theme}>
                <ChatBot 
                    floating 
                    steps={steps} 
                    style={{ height: 440, textAlign: 'end' }}
                    bubbleStyle={{ textAlign: 'start' }}
                />
            </ThemeProvider>
        )
    }
}

export default MyChatbot;