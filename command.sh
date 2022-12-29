# curl https://api.openai.com/v1/completions \
#   -H 'Content-Type: application/json' \
#   -H 'Authorization: Bearer '$CHAT_GPT_TOKEN \
#   -d '{
#   "model": "code-cushman-001",
#   "prompt": "Write a hello world program in javascript.",
#   "max_tokens": 256,
#   "temperature": 0,
#   "echo": false,
#   "top_p": 0.1,
#   "frequency_penalty": 0,
#   "presence_penalty": 0
# }'


curl https://api.openai.com/v1/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $CHAT_GPT_TOKEN" \
  -d '{
  "model": "code-cushman-001",
  "prompt": "Write hello world program",
  "temperature": 0,
  "max_tokens": 256,
  "top_p": 1,
  "frequency_penalty": 0,
  "presence_penalty": 0
}'