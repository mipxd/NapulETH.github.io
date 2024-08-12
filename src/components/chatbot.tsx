import React, { useEffect } from 'react';

const ChatbotComponent = () => {
   

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/gh/mintventuresxyz/demochatembed/dist/web.js';
        script.async = true;
        script.onload = () => {
            // @ts-ignore
            window.Chatbot.init({
                chatflowid: "74a936a0-1aa0-4f9e-be2c-90adcf66d4fa",
                apiHost: "https://llm.fana.ai",
                chatflowConfig: {
                    // topK: 2
                },
                theme: {
                    button: {
                        backgroundColor: "#6fcaf3",
                        right: 16,
                        bottom: 16,
                        size: "medium",
                        iconColor: "white",
                        customIconSrc: "https://dodaj.rs/images/mingcute_chat-2-line.png",
                                                        },
                    chatWindow: {
                        showTitle: true, // show/hide the title bar
                        title: "NapulETH AI",
                        titleAvatarSrc: "https://dodaj.rs/images/bot-avatarb657967b86d39775.png",
                        titleColor: "#ffffff", // This line sets the title color to white
                        welcomeMessage: "Hello! I'm NapulETH AI, your web3 AI assistant. here to help you navigate the exciting world of NapulETH Open Village. How can I make your experience amazing today?",
                        backgroundColor: "#ffffff",
                        // height: 900,
                        // width: 400,
                        fontSize: 16,
                        poweredByTextColor: "#000000",
                        botMessage: {
                            backgroundColor: "#f7f8ff",
                            textColor: "#303235",
                            showAvatar: true,
                            avatarSrc: "https://dodaj.rs/images/bot-avatarb657967b86d39775.png",
                        },
                        userMessage: {
                            backgroundColor: "#6fcaf3",
                            textColor: "#ffffff",
                            size: "small",
                            showAvatar: false,
                            avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                        },
                        textInput: {
                            placeholder: "Ask me anything",
                            backgroundColor: "#ffffff",
                            textColor: "#303235",
                            sendButtonColor: "#6fcaf3",
                        }
                    }
                }
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default ChatbotComponent;